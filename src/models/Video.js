// 우리의 데이터가 어떻게 생겼는지 알려주기 위한 파일이다. (model)
// 모델의 형태를 알려주기 위해 형태를 정의하는데
// 정의한 형태를 schema라고 한다.

// "default:..."은 스키마에 정의해 놓으면 POST되어 온 정보에 기본적으로 
// 스키마에 정의해 놓은 정보를 넣어주는 역할을 한다.
// 그러므로 POST할 때 default된 코드를 중복해서 안 넣어도 되는 효과가 있다.

// createdAt에서 Date.now가 설정되었는데 어째서 ()함수를 실행하지 않는 것인가?
// 그 이유는 어떠한 정보가 POST되었을 때만 Date.now가 실행됐으면 하기 때문이다.
// 만약 Date.now()라고 적어져있으면 스키마가 있는 파일(즉, 이 파일)이 저장되는 시간이
// 정보에 표시될 것이다.

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 80 },
    description: { type: String, required: true, trim: true, minLength: 20 },
    createdAt: { type: Date, required: true, default: Date.now },
    hashTags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    },
});


const Video = mongoose.model("Video", videoSchema);
export default Video;
