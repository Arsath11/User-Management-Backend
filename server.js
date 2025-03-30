import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/UserRouter.js";
import cors from "cors";
import RegistrationRouter from "./routes/RegistrationFormRoute.js";

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Database Connected");
    app.listen(process.env.PORT || 4040, () => {
      console.log(`Server Started at the Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error in Database Connection", err.message);
  });
app.use("/api", router);
app.use("/api", RegistrationRouter);
