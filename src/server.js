// mongoDB 실행 명령어 : sudo systemctl start mongod
// mongoDB 중지 명령어 : sudo systemctl stop mongod

// server.js는 서버에 필요한 구성요소들의 집합체이다.
// server.js에서 모든 작업들을 하기에는 복잡해지기에 다른 js파일을 만들고
// import하여 모든 정보가 server.js로 향하게 해서 server.js가 깔끔하게 만든다.

// import와 export는 다른 파일들과 소통하는 방법이다.

import express, { Router } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// pug는 기본적으로 pug가 사용되는 곳 지금 프로젝트에서는 server.js가 있는 동일한 위치에서 pug파일들을 찾아서
// pug를 실행하는데 여기서 pug는 server.js가 있는 /src 폴더가 아닌 /src의 하위 폴더 /src/views폴더에 있기 때문에
// 위와 같은 부가적인 명령어를 사용해주었다.
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// wetube프로젝트의 구분을 크게 3가지로 구분하여 golabal(users + videos), users, videos로 구분하였다.
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;