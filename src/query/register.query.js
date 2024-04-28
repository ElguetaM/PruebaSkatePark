import pool from "./../../config/db.js";

export const postRegisterQ = async (data) => {
  try {
    const newValues = Object.values(data);
    const query = {
      text: `INSERT INTO skaters (email, nombre, password,anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, 'f') RETURNING *`,
      values: newValues,
    };
    const res = await pool.query(query);
    return res;
  } catch (error) {
    res.send(error.message);
  }
};

export const getRegisterQ = async () => {
  try {
    const query = {
      text: `SELECT * FROM skaters`,
    };
    const res = await pool.query(query);
    return res.rows;
  } catch (error) {
    res.send(error.message);
  }
};
