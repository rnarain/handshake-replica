const pool = require("../../config/database");

module.exports = {
  createJob: (data, callBack) => {
    pool.query(
      `insert into job(companyID,location,postedDate,deadLineDate,salary,description,category,title	) 
                values(?,?,?,?,?,?,?,?)`,
      [
        data.companyID,
        data.location,
        data.postedDate,
        data.deadLineDate,
        data.salary,
        data.description,
        data.category,
        data.title,
      ],
      (error, results, fields) => {
        console.log(results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getJobs: (filter,callBack) => {
    pool.query(
      `select cp.name,jb.companyID,jb.jobID,jb.location,jb.postedDate,jb.deadLineDate,jb.salary,jb.description,jb.category,jb.title 
      from job AS jb INNER JOIN companyprofile AS cp ON jb.companyID = cp.companyID
`,
      [
        filter.location,
        filter.category
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

   getJobsByCompanyID: (id,callBack) => {
    pool.query(
      `select companyID,location,postedDate,deadLineDate,salary,description,category,title 
      from job where companyID = ?
`,
      [
       id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteJob: (id, callBack) => {
    pool.query(
      `delete from job where jobID = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
}