import {
  getPerfilQ,
  putPerfilQ,
  deletePerfilQ,
} from "../query/profile.query.js";
import jwt from "jsonwebtoken";

const myKey = process.env.SECRET_KEY;

export const perfilPage = async (req, res) => {
  const { token } = req.query;
  const decoded = jwt.verify(token, myKey);
  const users = decoded.users;
  const skater = await getPerfilQ(users);
  res.render("perfil", { skater });
};

export const putPerfilC = async (req, res) => {
  try {
    const { nombre, password, anos_experiencia, especialidad } = req.body;
    const newData = { nombre, password, anos_experiencia, especialidad };
    const updSkater = await putPerfilQ(newData);
    res.status(201).send(updSkater);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePerfilC = async (req, res) => {
  try {
    const { id } = req.params;
    const skater = await deletePerfilQ(id);
    res.status(201).send(skater);
  } catch (error) {
    console.log(error.message);
  }
};
