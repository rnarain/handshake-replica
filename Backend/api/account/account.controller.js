const {
    createStudent
  } = require("./account.service");
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  //const { sign } = require("jsonwebtoken");
  
  module.exports = {
    createStudent: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      createStudent(body, (err, results) => {
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
    }
}