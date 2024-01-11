//init.js는 server.js에 있는 구성요소들을 사용하여 서버를 초기화 시켜주는 역할을 한다.
//그러므로 실행의 처음위치에 해당하지만, 반대로 중요한 Express는 server.js에서 실행되므로 보조적인 역할이다. 

import "./db.js";
import "./models/Video.js";
import app from "./server.js";


const PORT = 4100;

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);