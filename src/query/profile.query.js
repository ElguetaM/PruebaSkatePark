import pool from "./../../config/db.js";

export const getPerfilQ = async (data) => {
  const { email } = data;
  try {
    const query = {
      text: `SELECT * FROM skaters WHERE email = '${email}'`,
    };
    const res = await pool.query(query);
    return res.rows[0];
  } catch (error) {
    res.send(error.message);
  }
};

export const putPerfilQ = async (data) => {
  try {
    const newValues = Object.values(data);
    const query = {
      text: `UPDATE skaters SET nombre = $1, "password" = $2, anos_experiencia = $3, especialidad = $4 WHERE nombre = $1 OR "password" = $2 or anos_experiencia = $3 or especialidad = $4 RETURNING *`,
      values: newValues,
    };
    const res = await pool.query(query);
    return res.rows[0];
  } catch (error) {
    res.send(error.message);
  }
};

export const deletePerfilQ = async (id) => {
  try {
    const query = {
      text: `DELETE FROM skaters WHERE id = $1`,
      values: [id],
    };
    const res = await pool.query(query);
    return res;
  } catch (error) {
    res.send(error.message);
  }
};
