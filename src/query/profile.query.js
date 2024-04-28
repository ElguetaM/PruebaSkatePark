import pool from "./../../config/db.js";

export const getPerfilQ = async (token) => {
  try {
    const query = {
      text: `SELECT email, nombre, "password", anos_experiencia, especialidad FROM skaters`,
    };
    const res = await pool.query(query);
    return res.rows[0];
  } catch (error) {
    res.send(error.message);
  }
};

// export const putPerfilQ = async (data) => {
//   try {
//     const newValues = Object.values(data);
//     const query = {
//       text: `UPDATE skaters SET nombre = $1, anos_experiencia = $2, especialidad = $3, estado = $4, WHERE id = $5, RERUNNING *`,
//       values: newValues,
//     };
//     const res = await pool.query(query);
//     return res;
//   } catch (error) {
//     res.send(error.message);
//   }
// };

export const deletePerfilQ = async (id) => {
  try {
    const query = {
      text: `DELETE FROM skaters WHERE id = $1`,
      values: id,
    };
    const res = await pool.query(query);
    return res;
  } catch (error) {
    res.send(error.message);
  }
};
