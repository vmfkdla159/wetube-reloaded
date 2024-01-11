// server.js가 복잡해지는 걸 막기위해 생성된 파일 중 하나로
// 웹사이트의 전체적인 부분에 해당하는 주소들을 모아둔 router파일이다.

import express, { Router } from "express";
import { login, join } from "../controllers/userController";
import { search, trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/serch", search);

export default globalRouter;