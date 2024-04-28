import {
  getPerfilQ,
  putPerfilQ,
  deletePerfilQ,
} from "../query/profile.query.js";
import { validateToken } from "../../middleware/validateToken.js";

import jwt from "jsonwebtoken";

const myKey = process.env.SECRET_KEY;

export const perfilPage = async (req, res) => {
  const { token } = req.query;
  const decoded = jwt.verify(token, myKey);
  const users = decoded.users;
  const skater = await getPerfilQ(users);
  const email = users.email;

  res.render("perfil", { skater });
};

export const putPerfilC = async (req, res) => {
  // try {
  const { nombre, password, anos_experiencia, especialidad } = req.body;
  const newInfo = {
    nombre,
    password,
    anos_experiencia,
    especialidad,
  };
  //const email = skater.find((skater) => skater.email);
  //const updSkater = await putPerfilQ(newInfo);
  // res.status(201).send(updSkater);
  //console.log(updSkater);
  // } catch (error) {
  //   console.log(error.message);
  // }
};

export const deletePerfilC = async (req, res) => {
  //necesito id//
  try {
    const skater = await deletePerfilQ(validateToken);
    //  res.status(201).render({ skater });
  } catch (error) {
    console.log(error.message);
  }
};
