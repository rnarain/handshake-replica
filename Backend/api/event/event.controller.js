const {
  createEvent,
  // getJobsByStudentID,
  getEventsByCompanyID,
  // deleteJob,
  getParticpantListByEventID,
  // changeApplicationStatus,
  // applyForJob
} = require("./event.service");

module.exports = {
  createEvent: (req, res) => {
    createEvent(req.body, (err, results) => {
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

  // getJobsByStudentID: (req, res) => {
  //   const id = req.params.id;
  //   getJobsByStudentID(id, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     return res.json({
  //       success: 1,
  //       data: results
  //     });
  //   });
  // },

  getEventsByCompanyID: (req, res) => {
    const id = req.params.id;
    // return res.json({
    //   success: 0,
    //   data: "ID cannot be null"
    // });

    getEventsByCompanyID(id, (err, results) => {
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

  getParticpantListByEventID: (req, res) => {
    const id = req.params.id;
    // return res.json({
    //   success: 0,
    //   data: "ID cannot be null"
    // });

    getParticpantListByEventID(id, (err, results) => {
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

  // deleteJob: (req, res) => {
  //   const id = req.params.id;
  //   deleteJob(id, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     if (results.affectedRows == 0) {
  //       console.log(results);
  //       return res.json({
  //         success: 0,
  //         message: "Record Not Found"
  //       });
  //     }
  //     return res.json({
  //       success: 1,
  //       message: "Job deleted successfully"
  //     });
  //   });
  // },

  // changeApplicationStatus: (req, res) => {
  //   changeApplicationStatus(req.body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: 0,
  //         message: "Database connection errror"
  //       });
  //     }
  //     return res.status(200).json({
  //       success: 1,
  //       data: results
  //     });
  //   });
  // },

  // applyForJob: (req, res) => {
  //   upload(req, res, function (err) {
  //     if (err) {
  //       return res.status(500).json(err);
  //     }

  //     const queryObject = url.parse(req.url, true).query;
  //     const data = {
  //       studentID: queryObject.studentID,
  //       jobID: queryObject.jobID,
  //       resumeURL: req.file.path,
  //     }
  //     applyForJob(data, (err, results) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).json({
  //           success: 0,
  //           message: "Database connection errror"
  //         });
  //       }
  //       return res.status(201).json({
  //         success: 1,
  //         data: results
  //       });
  //     });
  //   });
  // },

}


