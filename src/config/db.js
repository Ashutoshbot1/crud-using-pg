import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;
dotenv.config();

/**
 * Connection Pooling:
 * Instead of creating a new database connection for every single request (which is slow and resource-heavy),
 * we use a 'Pool'.
 *
 * What it does:
 * 1. It creates a set of connections ('pool') and keeps them open.
 * 2. When a query needs to run, it 'borrows' an available connection from the pool.
 * 3. Once the query is done, the connection is 'returned' to the pool for the next query to use.
 *
 * Why we use it:
 * - Performance: Opening/Closing connections is expensive. Reusing them is much faster.
 * - Scalability: It prevents the database from being overwhelmed by too many simultaneous connection attempts.
 * - Efficiency: Manages connection lifecycles automatically.
 */
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("Connected to database");
});

pool.on("error", (err) => {
  console.log(err.message);
});

export default pool;
