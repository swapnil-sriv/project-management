import { Router } from "express";
import { getUserTasks } from "../controllers/userTaskController";

const router = Router();

router.get("/",getUserTasks);


export default router;