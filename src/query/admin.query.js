import pool from "../../config/db.js";

export const putAdminQ = async (data) => {
  try {
    const query = {
      text: `UPDATE skaters SET estado = ${data.estado} WHERE id = ${data.id} RETURNING *`,
    };
    const res = await pool.query(query);
    return res.rows[0];
  } catch (error) {
    res.send(error.message);
  }
};
