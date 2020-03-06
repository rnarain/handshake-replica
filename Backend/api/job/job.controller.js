const {
    createJob,
    getJobs,
    getJobsByCompanyID,
    deleteJob,
    getApplicantListByJobID,
    changeApplicationStatus
  } = require("./job.service");
  
  module.exports = {
    createJob: (req, res) => {
      createJob(req.body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(201).json({
          success: 1,
          data: results
        });
      });
    },

    getJobs: (req, res) => {
      getJobs(req.query,(err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },

    getJobsByCompanyID: (req, res) => {
      const id = req.params.id;
      // return res.json({
      //   success: 0,
      //   data: "ID cannot be null"
      // });

      getJobsByCompanyID(id,(err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },

    getApplicantListByJobID: (req, res) => {
      const id = req.params.id;
      // return res.json({
      //   success: 0,
      //   data: "ID cannot be null"
      // });

      getApplicantListByJobID(id,(err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },

    deleteJob: (req, res) => {
      const id = req.params.id;
      deleteJob(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (results.affectedRows == 0) {
          console.log(results);
          return res.json({
            success: 0,
            message: "Record Not Found"
          });
        }
        return res.json({
          success: 1,
          message: "Job deleted successfully"
        });
      });
    },

    changeApplicationStatus: (req, res) => {
      changeApplicationStatus(req.body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },

}