import pool from "../config/db.js";

export const createuserService = async (name, email, password) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password],
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

export const getAllUsersService = async () => {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (err) {
    throw err;
  }
};

export const getUserByIDService = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

export const updateUserService = async (id, name, email, password) => {
  try {
    const result = await pool.query(
      "UPDATE users SET VALUES (name = $1, email = $2, password = $3) WHERE id = $4 RETURNING *",
      [name, email, password, id],
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

export const deleteUserService = async (id) => {
  try {
    const result = await pool.query("DELETE FROM users WHERE id=$1", [id]);
    return result.rows;
  } catch (err) {
    throw err;
  }
};
