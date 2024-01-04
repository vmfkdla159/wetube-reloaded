import express, { Router } from "express";
import { login, join } from "../controllers/userController";
import { search, trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/serch", search);

export default globalRouter;