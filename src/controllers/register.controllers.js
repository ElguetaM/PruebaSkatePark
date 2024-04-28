import { postRegisterQ, getRegisterQ } from "../query/register.query.js";
import path from "path";

const __dirname = path.resolve();

export const index = async (req, res) => {
  const skaters = await getRegisterQ();
  res.render("home", { skaters });
};

export const registroPage = async (req, res) => {
  res.render("registro");
};

export const postRegisterC = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad } = req.body;
  const skater = {
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad,
  };
  const { files } = req;
  const { foto } = files;
  const { name } = foto;
  const pathPhotos = `/uploads/${name}`;
  foto.mv(`${__dirname}/public${pathPhotos}`, async (err) => {
    try {
      if (err) throw err;
      skater.foto = pathPhotos;
      await postRegisterQ(skater);
      res.status(201).redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
