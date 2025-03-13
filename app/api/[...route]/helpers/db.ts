import { Pool } from "pg";

// Connection pool to Neon
export const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});
