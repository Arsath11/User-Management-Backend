import express from "express";
import { getData, getDatas, postData,updateData,deleteData } from "../controllers/RegistrationControllers.js";

const RegistrationRouter = express.Router();

RegistrationRouter.post("/add-user", postData);
RegistrationRouter.get("/add-user", getDatas);
RegistrationRouter.get("/add-user/:id", getData);
RegistrationRouter.put("/add-user/:id", updateData);
RegistrationRouter.delete("/add-user/:id", deleteData);

export default RegistrationRouter;
