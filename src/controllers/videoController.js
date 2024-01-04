//globalRouter
export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");

//videoRouter
export const watch = (req, res) => {
    return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
