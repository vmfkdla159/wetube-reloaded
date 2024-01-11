//MongoDB의 파일을 만들기만 해서는 쓸모가 없으므로 mongoDB를 사용할 수 있도록
//mongoose를 실행 코드를 작성한 파일이 db.js이고,
//이 파일을 init.js에 연결했다.


import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetubedb");

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB ✔");

db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);