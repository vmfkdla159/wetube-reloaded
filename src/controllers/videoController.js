// videoRouter에서 만들어진 주소에 무엇을 보여줄 것인지 정하는 파일이다.

import Video from "../models/Video"

//globalRouter
export const trending = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos })
};
export const search = (req, res) => res.send("Search");

//videoRouter
export const watch = async (req, res) => {
    const { id } = req.params;
    console.log(_id);
    return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing` })
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: `Upload Video` });
}

// try & catch는 에러를 잡아낼 수 있는 방법 중 하나이다.
// try & catch를 모를 때는 if문으로 복잡하게 해야했다.
// 실행 순서는 try{...}안의 코드를 실행하려고 '시도'를 하고 시도하는 와중에
// error가 발생하면 붙잡아서 catch{...}안의 코드를 실행하는 것이다.
// error가 없으면 그대로 try{...}안의 코드를 실행한다.
export const postUpload = async (req, res) => {
    const { title, description, hashtag } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashTags: hashtag.split(",").map(word => `#${word}`),
        });
        return res.redirect("/");
    } catch (error) {
        return res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message, });
    };
}