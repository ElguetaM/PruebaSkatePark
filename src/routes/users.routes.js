import { Router } from "express";
import {
  index,
  registroPage,
  postRegisterC,
} from "../controllers/register.controllers.js";
import { loginPage, getLoginC } from "../controllers/login.controllers.js";
import { perfilPage, putPerfilC, /*deletePerfilC*/ } from "../controllers/profile.controllers.js";
// import { validateToken } from "../../middleware/validateToken.js";

const router = Router();

router.get("/", index);
router.get("/registro", registroPage);
router.get("/login", loginPage);
router.get("/perfil", perfilPage);
router.post("/skaters", postRegisterC);
router.post("/login", getLoginC);
//router.put("/skaters", putPerfilC);
//router.delete("/skaters", deletePerfilC);
//router.post("/admin", validateToken);

export default router;
