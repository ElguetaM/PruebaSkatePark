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

// export const putPerfilQ = async (data) => {
//   try {
//     const query = {
//       text: "UPDATE skaters SET nombre = $1, anos_experiencia = $2, especialidad = $3, estado = $4, fotos = $5 WHERE id = $6, RERUNNING *",
//       values: data,
//     };
//     const res = await pool.query(query);
//     return res;
//   } catch (error) {
//     res.send(error.message);
//   }
// };

// export const deletePerfilQ = async (id) => {
//   try {
//     const query = {
//       text: "DELETE FROM skaters WHERE id = $1",
//       values: id,
//     };
//     const res = await pool.query(query);
//     return res;
//   } catch (error) {
//     res.send(error.message);
//   }
// };
