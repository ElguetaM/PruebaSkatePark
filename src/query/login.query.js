export const getLoginQ = async ({email, password}) => {
  try {
    const query = {
      text: "SELECT * FROM skaters WHERE email = $1 AND password = $2",
      values: {email, password},
    };
    const res = await pool.query(query);
    return res;
  } catch (error) {}
};

// SELECT FROM skaters WHERE email='admin@admin' AND password= '111'