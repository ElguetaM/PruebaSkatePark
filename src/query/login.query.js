import pool from "../../config/db.js";

export const getLoginQ = async ({ email, password }) => {
  try {
    const query = {
      text: `SELECT * FROM skaters WHERE email = $1 AND "password" = $2`,
      values: [email, password],
    };
    const res = await pool.query(query);
    return res.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};