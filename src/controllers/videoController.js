const fakeUser = {
    username:"midwinter",
    loggedIn: false,
};


//globalRouter
export const trending = (req, res) => res.render("home", {pageTitle: "Home", fakeUser});
export const search = (req, res) => res.send("Search");

//videoRouter
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
