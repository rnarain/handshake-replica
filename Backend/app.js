//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');
require('dotenv').config();



//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret              : 'cmpe273_kafka_passport_mongo',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

app.use(bodyParser.urlencoded({
    extended: true
  }));
//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });


  app.use(express.json());
var accountRouter = require('./api/account/account.router');
var jobRouter = require('./api/job/job.router');
var eventRouter = require('./api/event/event.router');
var jobApplicationRouter = require('./api/jobApplication/jobApplication.router');


app.use('/api/account',accountRouter);
app.use('/api/event',eventRouter);
app.use('/api/job',jobRouter);
app.use('/api/jobApplication',jobApplicationRouter);



//   var Users = [{
//       username : "admin",
//       password : "admin"
//   }]

// //   var books = [
// //     {"BookID" : "1", "Title" : "Book 1", "Author" : "Author 1"},
// //     {"BookID" : "2", "Title" : "Book 2", "Author" : "Author 2"},
// //     {"BookID" : "3", "Title" : "Book 3", "Author" : "Author 3"}
// // ]

// //Route to handle Post Request Call
// app.post('/login',function(req,res){
    
//     // Object.keys(req.body).forEach(function(key){
//     //     req.body = JSON.parse(key);
//     // });
//     // var username = req.body.username;
//     // var password = req.body.password;
//     console.log("Inside Login Post Request");
//     //console.log("Req Body : ", username + "password : ",password);
//     console.log("Req Body : ",req.body);
//     Users.filter(function(user){
//         if(user.username === req.body.username && user.password === req.body.password){
//             res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
//             req.session.user = user;
//             res.writeHead(200,{
//                 'Content-Type' : 'text/plain'
//             })
//             res.end("Successful Login");
//         }
//     })

    
// });

// //Route to get All Books when user visits the Home Page
// app.get('/home', function(req,res){
//     console.log("Inside Home Login");    
//     res.writeHead(200,{
//         'Content-Type' : 'application/json'
//     });
//     console.log("Req Body : ",req.body);
//     res.end(JSON.stringify(books));
    
// })

// app.get('/demo', function(req,res){
//     console.log(process.env.MYSQL_PORT);    
//     res.end(process.env.MYSQL_PORT);
    
// })

// var checkInBooks=(id) =>{
//     return  books.find(s=>s.BookID === id);
// };

// //Route to get All Books when user visits the Home Page
// app.post('/create', function(req,res){
//     console.log("Inside Create");    
//     console.log("Books : ",JSON.stringify(req.body));
//     if(checkInBooks(req.body.BookID)){
//         return res.status(400).json({message: "BookID already exists"});
//     }
//     else{
//         books.push(req.body);
//         return res.status(201).json({message: "Book added successfully!"});
//     }
// })


// app.post('/delete', function(req,res){
//     console.log("Inside delete");  
//     console.log(req.body);  

//     if(!checkInBooks(req.body.BookID)){
//         return res.status(400).json({message: "BookID doesnot exists"});
//     }
//     else{
//         books = books.filter((obj)=> {
//             return obj.BookID !== req.body.BookID;
//         });
//         return res.status(200).json({message: "Book deleted successfully!"});
//     }
// })
//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");