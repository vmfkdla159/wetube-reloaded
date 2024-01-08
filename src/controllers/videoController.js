//Video Array
const videos = [
    {
        title: "Video #1",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title: "Video #2",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Video #3",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
    {
        title: "Video #4",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 4,
    },
    {
        title: "Video #5",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 5,
    },
    {
        title: "Video #6",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 6,
    },
];

//globalRouter
export const trending = (req, res) => {
    return res.render("home", {pageTitle: "Home", videos})
};
export const search = (req, res) => res.send("Search");

//videoRouter
export const watch = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
};
export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle:`Editing:${video.title}`, video})
};
export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}; 

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:`Upload Video`});
}

export const postUpload = (req, res) => {
    const newVideo = {
        title: req.body.title,
        rating: 0,
        comment: 0,
        createdAt: "just now",
        views: 0,
        id: videos.length + 1,
    };
    videos.push(newVideo);
    return res.redirect("/");
}