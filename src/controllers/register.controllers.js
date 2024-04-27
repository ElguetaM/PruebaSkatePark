import { postRegisterQ, getRegisterQ } from "../query/register.query.js";
import path from "path";

const __dirname = path.resolve();

export const index = async (req, res) => {
  const users = await getRegisterQ();
  console.log(users);
  res.render("home", users);
};

export const registroPage = async (req, res) => {
  res.render("registro");
};

export const perfilPage = (req, res) => {
  res.render("perfil");
};

export const postRegisterC = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad } = req.body;
  const newUser = {
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad,
  };
  console.log(newUser);
  const { files } = req;
  const { foto } = files;
  const { name } = foto;
  const pathPhotos = `/uploads/${name}`;
  foto.mv(`${__dirname}/public${pathPhotos}`, async (err) => {
    try {
      if (err) throw err;
      newUser.foto = pathPhotos;
      await postRegisterQ(newUser);
      res.status(201).redirect("/skaters");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};

// export const putPerfilC = async (req, res) => {
//   try {
//     const data = req.body;
//     const skaters = await putPerfilQ(data);
//     res
//       .json({
//         skaters,
//         message: `Skater editado con exito`,
//       })
//       .status(201);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deletePerfilC = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const skaters = await deleteSkaterQ(id);
//     res
//       .json({
//         skaters,
//         message: `Skater eliminado con exito`,
//       })
//       .status(201);
//   } catch (error) {
//     console.log(error);
//   }
// };
