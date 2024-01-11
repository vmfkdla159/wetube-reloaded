// userRouter에서 만들어진 주소에 무엇을 보여줄 것인지 정하는 파일이다.

//globalRouter
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");

//userRouter
export const logout = (req, res) => res.send("Log out");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const profile = (req, res) => res.send("See Profile");