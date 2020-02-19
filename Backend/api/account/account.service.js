const pool = require("../../config/database");

module.exports = {
  createStudent: (data, callBack) => {
    pool.query(
      `insert into account(type, email, password) 
                values(?,?,?)`,
      [
        0,
        data.email,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
}