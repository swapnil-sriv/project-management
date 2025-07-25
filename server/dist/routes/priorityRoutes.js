"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userTaskController_1 = require("../controllers/userTaskController");
const router = (0, express_1.Router)();
router.get("/", userTaskController_1.getUserTasks);
exports.default = router;
