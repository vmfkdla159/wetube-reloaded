import express, { Router } from "express";
import { logout, edit, remove, profile  } from "../controllers/userController"

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", profile);


export default userRouter;
