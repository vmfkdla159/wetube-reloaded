// server.js가 복잡해지는 걸 막기위해 생성된 파일 중 하나로
// 웹사이트의 users 부분에 해당하는 주소들을 모아둔 router파일이다.

import express, { Router } from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

// "/:id(\\d+/)"는 동영상들의 구분을 하기위해 들어간다. 
// "/:id(\\d+)"는 /:id에 숫자만 들어가게 해주는 코드이다.
videoRouter.get("/:id([0-9a-f]{24})", watch);

// form의 method인 get과 post를 동시에 사용하고 controller가 form을 다룰 수 있게 만들어 주는 코드
// get은 form을 사용하여 무언가를 검색을 하는 등의 보안이 필요없을 때 사용한다.
// post는 form을 사용하여 정보를 DB에 보낼 때, 혹은 파일을 보낼 때 등의 보안이 필요할 때 사용한다.
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
