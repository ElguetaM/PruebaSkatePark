import express from "express";
import usersRoutes from "./src/routes/users.routes.js";
import path from "path";
import { engine } from "express-handlebars";
import fileUpload from "express-fileupload";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine(
  "handlebars",
  engine({
    defaultLayout: __dirname + "/views/mainLayout/main",
  })
);
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  fileUpload({
    limits: 5000000,
    abortOnLimit: true,
    responseOnLimit: "El tamaño de la imagen supera el límite permitido",
  })
);
app.use(express.static("assets"));
app.use(usersRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
