import { Router } from "express";
import {
  index,
  registroPage,
  perfilPage,
  postRegisterC,
} from "../controllers/register.controllers.js";
import { } from "../controllers/login.controllers.js";
import { loginPage } from "../query/login.query.js";


const router = Router();

router.get("/", index);
router.get("/registro", registroPage);
router.get("/login", loginPage);
router.get("/skaters", perfilPage);
router.post("/skaters", postRegisterC);
router.post("/login",)
//router.post("/admin"); 

export default router;
