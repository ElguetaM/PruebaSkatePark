import jwt from "jsonwebtoken";
import { getLoginQ } from "../query/login.query.js";

const myKey = process.env.SECRET_KEY;

export const loginPage = (req, res) => {
  res.render("login");
};

export const getLoginC = async (req, res) => {
  const { email, password } = req.body;
  const skater = { email, password };
  const users = await getLoginQ(skater);
  const token = jwt.sign({ users }, myKey, { expiresIn: "1h" });
  try {
    if (skater.email !== users.email && skater.password !== users.password) {
      return res.status(401).send({
        error: "401 Acceso no autorizado",
        message: "Email o contraseña incorrecto",
      });
    }
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
