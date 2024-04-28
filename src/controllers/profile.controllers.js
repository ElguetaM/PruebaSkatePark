import jwt from "jsonwebtoken";
import { getPerfilQ } from "../query/profile.query.js";

const myKey = process.env.SECRET_KEY;

export const perfilPage = async (req, res) => {
  const { token } = req.query;
  const decoded = jwt.verify(token, myKey);
  const skater = await getPerfilQ(decoded);
  res.render("perfil", { skater });
};

// Luego de iniciar la sesión, los participantes deberán poder modificar sus datos,exceptuando el correo electrónico y su foto. Esta vista debe estar protegida con JWT y los datos que se utilicen en la plantilla deben ser extraídos del token//

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

export const deletePerfilC = async (req, res) => {
  try {
    const { id } = req.query;
    const skater = await deleteSkaterQ(id);
    console.log(skater);
    res.status(200).send(skater).redirect("/");
  } catch (error) {
    console.log(error);
  }
};
