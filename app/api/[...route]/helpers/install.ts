import { pool } from "./db";

/**
 * Saves installation information to installation db
 * @param payload
 * @returns
 */
export async function saveInstallation(payload: any) {
  if (!payload.installation) return;

  const { id: installationId, account } = payload.installation;

  const accountLogin = account.login;
  const accountId = account.id;
  const accountType = account.type;

  // Inserts or updates record
  const query = `
    INSERT INTO installations
      (installation_id, account_login, account_id, account_type)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (account_id)
    DO UPDATE 
        SET installation_id = EXCLUDED.installation_id,
            account_login = EXCLUDED.account_login,
            account_type = EXCLUDED.account_type,
            updated_at = now();
  `;
  const values = [installationId, accountLogin, accountId, accountType];

  await pool.query(query, values);
}
