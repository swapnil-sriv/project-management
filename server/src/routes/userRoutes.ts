import { Router } from "express";
import { createTask, getTasks, updateTaskStatus } from "../controllers/taskController";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/",getUsers);

export default router;
