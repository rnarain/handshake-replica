const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");
const {
  createJob,
  getJobs,
  getJobsByCompanyID,
  deleteJob,
  getApplicantListByJobID,
  changeApplicationStatus
//   login,
//   getUserByUserId,
//   getUsers,
//   updateUsers,
//   deleteUser
} = require("./job.controller");
// router.get("/", checkToken, getUsers);s
 router.post("/createJob", createJob);
 router.get("/getJobs",getJobs);
 router.get("/getJobsByCompanyID/:id",getJobsByCompanyID);
 router.get("/getApplicantListByJobID/:id",getApplicantListByJobID);
 router.delete("/deleteJob/:id",deleteJob);
 router.post("/changeApplicationStatus",changeApplicationStatus);



// router.get("/:id", checkToken, getUserByUserId);
// router.post("/login", login);
// router.patch("/", checkToken, updateUsers);
// router.delete("/", checkToken, deleteUser);

module.exports = router;