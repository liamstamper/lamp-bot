import DocsPage from "@/components/DocsPage";
import Navbar from "@/components/Navbar";

const testdata = {
  title: "Open-Source AI-Powered Code Reviews",
  subtitle: "By [Liam Stamper](https://github.com/liamstamper)",
  image: "/howitworks.png",
  content: [
    "**Overview:**",
    "This GitHub App provides an automated workflow for AI analsis on pull requests with minimal setup for repository owners and collaborators. Once installed on a repository, the App listens for GitHub webhook events—like when a new pull request is opened—then automatically fetches the changed files, generates feedback via AI prompts, and posts a comment back on the pull request.",

    "**How it Works**",
    "On first install Github sends a webhook with installation id and an account_id which is saved to a neon db. ",
    "This sends an in stallation id to the following endpoint",
    `\`\`\`ts
    const hello = 'hello'
    let h = hello.toString()
    `,
    "Whenever a pull request is opened or updated in your repo, GitHub sends a webhook event to our service. This event includes details like the repository name, PR number, and any updated file information.",
    "Our backend then uses the GitHub App’s installation ID to generate a short-lived access token. With this token, the service retrieves the pull request’s changed files and diffs from GitHub’s API.",
    "The code diffs are passed to our AI model. The model reviews the changes for potential improvements, best practices, or errors, then generates feedback tailored to the specific diffs.",
    "5. **Posting a Review**: Finally, our service posts the AI-generated review back to the pull request as a comment. You and your team can see the bot’s suggestions and act on them immediately, streamlining your code review workflow.",
    "By centralizing these steps on our side, you don’t need to manage private keys or environment variables yourself. All the complexity—such as JWT creation, access token generation, and AI inference—happens transparently. This means you can focus on code, while we handle the heavy lifting of automated reviews.",
  ],
  showCTA: true,
};
export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <DocsPage {...testdata} />
      </div>
    </>
  );
}
