//globalRouter
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");

//userRouter
export const logout = (req, res) => res.send("Log out");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const profile = (req, res) => res.send("See Profile");