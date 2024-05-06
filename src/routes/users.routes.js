import { Router } from "express";
import {
  index,
  registroPage,
  postRegisterC,
} from "../controllers/register.controllers.js";
import { loginPage, getLoginC } from "../controllers/login.controllers.js";
import {
  perfilPage,
  putPerfilC,
  deletePerfilC,
} from "../controllers/profile.controllers.js";
import { adminPage, putAdminC } from "../controllers/admin.controllers.js";

const router = Router();

router.get("/", index);
router.get("/registro", registroPage);
router.get("/login", loginPage);
router.get("/perfil", perfilPage);
router.get("/skaters", index);
router.get("/admin", adminPage);
router.post("/skaters", postRegisterC);
router.post("/login", getLoginC);
router.put("/skaters", putPerfilC);
router.put("/skaters/status/:id", putAdminC);
router.delete("/skaters/:id", deletePerfilC);

export default router;
