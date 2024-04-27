export const loginPage = (req, res) => {
  res.render("login");
};

export const getLoginQ = async (nombre, password) => {
  try {
    const query = {
      text: "SELECT * FROM skaters WHERE nombre = $1 AND password = $2",
      values: [nombre, password],
    };
    const res = await pool.query(query);
    return res;
  } catch (error) {}
};
