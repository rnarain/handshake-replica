const {
    createStudent,
    login,
    getStudentProfileDetails,
    getEducationDetails,
    getExperienceDetails,
    getAccountDetails,
    updateStudentName,
    getAllStudents
  } = require("./account.service");

  let studentObj ={
    accountInfo :"",
    studentprofile : "",
    education : "",
    experience : "",
  }
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
          data: results,
          message : "Sign up Successful"
        });
      });
    },
    login: (req, res) => {
      const body = req.body;
      login(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message : "Database error"
          });
        }
        else{
          if(results.length ==0){
            return res.json({
              success: 0,
              message : "email or password incorrect"
            });
          }
          if(compareSync(body.password ,results[0].password)){
            // localStorage.setItem('id', results[0].studentID);
            // localStorage.setItem('type', results[0].type);
          // res.cookie('cookie',results[0].studentID,{maxAge: 900000, httpOnly: false, path : '/'});
            return res.json({
              success: 1,
              data: results,
              message : "Signin Successful"
            });
          }
          else{
            return res.status(200).json({
              success: 0,
              message: "email id or password incorrect"
            });
          }
        }
        
      });
    },
    getStudentDetails : (req,res)=>{
      const id = req.params.id;
      
      getStudentProfileDetails(id,(err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        studentObj.studentprofile = results;
        getAccountDetails(results[0].accountID,(err, Accresults) => {
        if (err) {
          console.log(err);
          return;
        }
        studentObj.accountInfo = Accresults;
      });
      });
      // getExperienceDetails(id,(err, results) => {
      //   if (err) {
      //     console.log(err);
      //     return;
      //   }
      //   studentObj.experience = results;
      // });
      getEducationDetails(id,(err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        studentObj.education = results;
      });

      


      return res.json({
        success: 1,
        data: studentObj
      });
    },

    updateStudentName: (req, res) => {
      const body = req.body;
      updateStudentName(body, (err, results) => {
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
  
    getAllStudents: (req, res) => {
      getAllStudents((err, results) => {
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