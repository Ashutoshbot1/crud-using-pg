import pool from "../config/db.js";

const createUserTable = async () => {
  try {
    const query =
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL)";
    const result = await pool.query(query);
    console.log("User table created successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export default createUserTable;
