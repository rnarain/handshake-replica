const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");
const {
  createStudent,
  login,
  getStudentDetails,
  updateStudentName
//   login,
//   getUserByUserId,
//   getUsers,
//   updateUsers,
//   deleteUser
} = require("./account.controller");
// router.get("/", checkToken, getUsers);
 router.post("/createStudent", createStudent);
 router.get("/getStudentDetails/:id", getStudentDetails);
 router.post("/updateStudentName", updateStudentName);

 router.post("/login", login);

// router.get("/:id", checkToken, getUserByUserId);
// router.post("/login", login);
// router.patch("/", checkToken, updateUsers);
// router.delete("/", checkToken, deleteUser);

module.exports = router;