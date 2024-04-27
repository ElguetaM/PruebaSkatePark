import jwt from "jsonwebtoken";

const myKey = process.env.SECRET_KEY;

export const validateToken = (req, res) => {
  try {
    const { token } = req.query;
    jwt.verify(token, myKey, (err, decoded) => {
      err
        ? res.status(401).json({
            error: "401 Acceso no autorizado",
            message: "El token no es valido",
          })
        : res.json({
            message: "Acceso autorizado, bienvenido",
            decoded: decoded,
          });
    });
  } catch (error) {
    res.status(401).send({
      error: error.message,
    });
  }
};
