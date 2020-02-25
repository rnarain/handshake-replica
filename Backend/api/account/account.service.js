const pool = require("../../config/database");
// 0 - student 1- employer
module.exports = {

  createStudent: (data, callBack) => {
    pool.getConnection(function (err, connection) {
      connection.beginTransaction(() => {
        connection.query('insert into account(type, email, password) values(?,?,?)',
          [
            0,
            data.email,
            data.password
          ],
          (err, results) => {
            if (err) {          //Query Error (Rollback and release connection)
              connection.rollback(function () {
                return callBack(err);
              });
            }
            else {
              connection.query('select accountID from account where email = ? ',
                [
                  data.email,
                ],
                (err, result) => {
                  if (err) {          //Query Error (Rollback and release connection)
                    connection.rollback(function () {
                      return callBack(err);
                    });
                  }
                  else {
                    let accountID= result[0].accountID;
                    //insert in student profile
                        connection.query('insert into studentprofile(accountID, fname ,lname) values(?,?,?)',
                                  [
                                    accountID,
                                    data.fname,
                                    data.lname
                                  ],
                                  (err, results) => {
                                    if (err) {          //Query Error (Rollback and release connection)
                                      connection.rollback(function () {
                                        return callBack(err);
                                      });
                                    }
                                    else {
                                      //get studentID
                                            connection.query('select studentID from studentprofile where accountID = ? ',
                                        [
                                          accountID
                                        ],
                                        (err, results) => {
                                         
                                          if (err) {          //Query Error (Rollback and release connection)
                                            connection.rollback(function () {
                                              return callBack(err);
                                            });
                                        }
                                        else {
                                          let studentID = results[0].studentID;
                                          console.log(studentID);

                                          //insert into education table
                                          connection.query('insert into education(studentID,college,major,yearOfPassing ) values(?,?,?,?)',
                                                          [
                                                            studentID,
                                                            data.college,
                                                            data.major,
                                                            data.yearOfPassing
                                                          ],
                                          (err, results) => {
                                            if (err) {          //Query Error (Rollback and release connection)
                                              connection.rollback(function () {
                                                return callBack(err);
                                              });
                                            }
                                            else{
                                              connection.commit(function (err) {
                                                if (err) {
                                                  connection.rollback(function () {
                                                    connection.release();
                                                    //Failure
                                                    callBack(err);
                                                  });
                                                } else {
                                                  connection.release();
                                                  return callBack(null, results);
                                                  //Success
                                                }
                                              });
                                            }
                                          });
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }

            });
        });
    });
  },





















      // createStudent: (data, callBack) => {
      //   pool.query(
      //     `insert into account(type, email, password) 
      //               values(?,?,?)`,
      //     // `-- start a new transaction
      //     // START TRANSACTION;

      //     // -- insert into account
      //     // insert into account(type, email, password) values(?,?,?);

      //     // -- get accountID
      //     // SET @accountid = ( select accountID from  account where email = ? );

      //     // -- insert into 
      //     // insert into studentprofile(accountID, fname ,lname) 
      //     //               values(@accountid,?,?);

      //     // COMMIT;`,
      //     [
      //       0,
      //       data.email,
      //       data.password,
      //     ],
      //     (accounterror, accountresults) => {
      //       if (accounterror) {
      //         callBack(accounterror);
      //       }
      //       console.log(accountresults);
      //       return callBack(null,accountresults);
      //       // else {
      //       //   //create studentProfile & education
      //       //   pool.query(
      //       //     `insert into studentprofile(accountID, fname ,lname) 
      //       //               values(?,?,?)`,
      //       //     [
      //       //       accountresults.accountID,
      //       //       data.fname,
      //       //       data.lname
      //       //     ],
      //       //     (studenterror, studentresults) => {
      //       //       if (studenterror) {
      //       //         callBack(studenterror);
      //       //       }
      //       //       else {
      //       //         pool.query(
      //       //           `insert into education(studentID,college,major,yearOfPassing ) 
      //       //                     values(?,?,?,?)`,
      //       //           [
      //       //             studentresults.accountID,
      //       //             data.college,
      //       //             data.major,
      //       //             data.yearOfPassing
      //       //           ],
      //       //           (educationerror, educationresults) => {
      //       //             if (educationerror) {
      //       //               callBack(educationerror);
      //       //             }
      //       //             return callBack(null, educationresults);
      //       //           }
      //       //         );
      //       //       }
      //       //     }
      //       //   );
      //       // }
      //     }
      //   );
      // },

      login: (data, callBack) => {
        console.log(data);
        pool.query(
          `select * from account where email= ?`,
          [
            data.email,
          ],
          (error, results) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      }
}
