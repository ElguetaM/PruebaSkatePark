export const getLoginC = async (req, res) => {
  try {
    const { nombre, password } = req.body;
    const skaters = await getLoginQ(data);
    const token = jwt.sign({ skaters }, myKey, { expiresIn: "1h" });
    res
      .json({
        skaters,
        message: "Bienvenido ${nombre}",
      })
      .status(201);
  } catch (error) {
    console.log(error);
  }
};
