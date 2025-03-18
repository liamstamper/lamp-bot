import jwt from "jsonwebtoken";
import { pool } from "./db";

/**
 * Generates a JSON Web Token (JWT) for authenticating a GitHub App.
 *
 * @returns {string} The signed JWT token.
 */
export function createAppJwt(): string {
  const appId = process.env.GITHUB_APP_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;

  if (!appId || !privateKey) {
    throw new Error("Missing GITHUB_APP_ID or GITHUB_APP_PRIVATE_KEY");
  }
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now, // Issued at time
    exp: now + 60 * 8, // JWT expiry (max 10 minutes, here we do 8 for safety)
    iss: appId, // GitHub App's App ID
  };

  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
  return token;
}

/**
 * Looks up the GitHub app installation ID from the database and exchanges it
 * for an installation access Token using GitHub's API.
 *
 * @returns {string} The installation token.
 */
export async function getInstallationAccessToken(
  login: string
): Promise<string> {
  const result = await pool.query(
    `
      SELECT installation_id
      FROM installations
      WHERE account_login = $1
      LIMIT 1
    `,
    [login]
  );
  console.log("Query result:", result.rows, login, typeof login); // Check the output
  if (result.rows.length === 0) {
    throw new Error(`No installation found for login: ${login}`);
  }

  const installationId = result.rows[0].installation_id;
  if (!installationId) {
    throw new Error(`Missing installation_id in DB for login: ${login}`);
  }

  const jwt = createAppJwt();

  const response = await fetch(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create installation token: ${errorText}`);
  }

  const data = await response.json();
  return data.token;
}
