import { Hono } from "hono";
import { handle } from "hono/vercel";
import { promptModel } from "./helpers/Groq";
import { getInstallationAccessToken } from "./helpers/githubAuth";

export const dynamic = "force-dynamic";

const app = new Hono().basePath("/api");

// Simple endpoint to test if the API is online
app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono on Vercel!",
  });
});

/**
 * Main webhook handler for GitHub pull request events.
 */
app.post("/webhook", async (c) => {
  const payload = await c.req.json();

  // Handle pull_request events
  if (payload.pull_request) {
    console.log("Received pull_request event:", payload.pull_request);

    if (!payload.pull_request.user || !payload.pull_request.user.login) {
      return c.json({ message: "login not found" }, 500);
    }
    if (!payload.pull_request.html_url) {
      // FIXED: `pull_request.pull_request.html_url` -> `pull_request.html_url`
      return c.json(
        {
          message: "pull_request.html_url not found",
        },
        500
      );
    }
    if (!payload.repository || !payload.repository.name) {
      // FIXED: pull_request.repository -> repository
      return c.json(
        {
          message: "repository.name not found",
        },
        500
      );
    }
    if (!payload.pull_request.number) {
      // FIXED: `pull_request.pull_request.number` -> `pull_request.number`
      return c.json(
        {
          message: "pull_request.number not found",
        },
        500
      );
    }

    // Extract relevant data correctly
    const htmlUrl = payload.pull_request.html_url;
    const owner = payload.pull_request.user.login;
    const repo = payload.repository.name;
    const prNumber = payload.pull_request.number;

    console.log(`PR #${prNumber} opened by ${owner} in ${repo}: ${htmlUrl}`);

    const changes = await fetchPRChanges(owner, htmlUrl);

    const diff = changes
      .map((file) => `${file.filename}: ${file.status}`)
      .join("\n");

    const review = await promptModel(diff);

    const reviewContent =
      review.choices[0]?.message?.content || "No feedback generated.";

    await postReview(owner, repo, prNumber, reviewContent);

    return c.json({ message: "PR event processed and review posted." });
  }

  // Handle commit push events
  if (payload.commits) {
    return c.json({ message: "Commit event received." });
  }

  // Fallback for unhandled events
  return c.json({ message: "Unhandled event type." });
});

/**
 * Fetches files changed in a specific pull request from GitHub.
 *
 * @param owner Repository owner's username
 * @param repo Repository name
 * @param prNumber Pull request number
 */
const fetchPRChanges = async (
  owner: string,
  htmlUrl: string
): Promise<{ filename: string; status: string }[]> => {
  const token = await getInstallationAccessToken(owner);

  const response = await fetch(`${htmlUrl}/files`, {
    headers: { Authorization: `token ${token}` },
  });

  console.log("Received response: ", response);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error fetching PR changes:", errorText);
    throw new Error(`Failed to fetch PR changes: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Posts a comment to a pull request on GitHub.
 *
 * @param owner Repository owner's username
 * @param repo Repository name
 * @param prNumber Pull request number
 * @param review Comment content to post
 */
const postReview = async (
  owner: string,
  repo: string,
  prNumber: number,
  review: string
) => {
  const token = await getInstallationAccessToken(owner);

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: review }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error posting GitHub comment:", errorText);
    throw new Error(`Failed to post GitHub comment: ${response.statusText}`);
  }

  return response.json();
};

export const GET = handle(app);
export const POST = handle(app);

export default app;
