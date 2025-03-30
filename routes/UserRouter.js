import express from "express";
import { getDatas, postData } from "../controllers/UserControllers.js";

const router = express.Router();

router.post("/users", postData);
router.get("/users", getDatas);

export default router;
