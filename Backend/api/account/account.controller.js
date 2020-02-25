const {
    createStudent,
    login
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
    },
    login: (req, res) => {
      const body = req.body;
      login(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        else{
          if(compareSync(body.password ,results[0].password)){
          res.cookie('cookie',results[0],{maxAge: 900000, httpOnly: false, path : '/'});
            return res.json({
              success: 1,
              data: results
            });
          }
          else{
            return res.status(400).json({
              success: 0,
              data: "email id or password incorrect"
            });
          }
        }
        
      });
    }
}