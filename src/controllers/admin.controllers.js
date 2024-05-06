import { getRegisterQ } from "../query/register.query.js";
import { putAdminQ } from "../query/admin.query.js";

export const adminPage = async (req, res) => {
  try {
    const skaters = await getRegisterQ();
    res.render("Admin", { skaters });
  } catch (error) {
    res.send(error.message);
  }
};

export const putAdminC = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  try {
    const skater = await putAdminQ({ estado, id });
    res.status(201).send(skater);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
