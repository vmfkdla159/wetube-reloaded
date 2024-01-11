// server.js가 복잡해지는 걸 막기위해 생성된 파일 중 하나로
// 웹사이트의 users 부분에 해당하는 주소들을 모아둔 router파일이다.

import express, { Router } from "express";
import { logout, edit, remove, profile  } from "../controllers/userController"

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", profile);


export default userRouter;
