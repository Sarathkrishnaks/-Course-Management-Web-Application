require('./config/config');
 require('./models/db');
 require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');


var app =  express();


const CourseData = require('./models/Coursedata'); 
const EnrollData = require('./models/Enrolldata');
const Profsignup = require('./models/Profsignup');
const StudentData = require('./models/Studentdata');

const jwt = require('jsonwebtoken');

app.use(cors());


//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);


//error handler
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

username='admin';
password='1234';

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split('')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  } 

// storing professor details starts here

  app.post('/proflogin', (req, res) => {
      let userData = req.body
      if(!username) {
          res.status(401).send('Invalid Username')
      } else
      if(password !== userData.password) {
          res.status(401).send('Invalid Password')
      } else {
          let payload = {subject:username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
      }
  })

  // storing professor details ends here


  
  app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var course ={
         title :req.body.course.title,
         mentor:req.body.course.mentor,
         coursePeriod:req.body.course.coursePeriod,
         imageUrl :req.body.course.imageUrl
        }
        var course = new CourseData(course);
        course.save();
});

app.get('/courses',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    CourseData.find()
    .then(function(courses){
        res.send(courses);
    });
});


app.get('/enrolls',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    EnrollData.find()
    .then(function(enrolls){
        res.send(enrolls);
    });
});
app.post('/enter',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var enroll ={
         name :req.body.enroll.name,
         nameofCourse:req.body.enroll.nameofCourse,
         email:req.body.enroll.email,
         phoneNo :req.body.enroll.phoneNo,
         institutionName :req.body.enroll.institutionName
        }
        var enroll = new EnrollData(enroll);
        enroll.save();
});
//Delete starts here

app.delete('/remove/:id',(req,res)=>{
    id = req.params.id;
    EnrollData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
    })


//Delete ends here

// Prof signup starts here

app.get('/profs',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Profsignup.find()
    .then(function(profs){
        res.send(profs);
    });
});
app.post('/enterprof',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var prof ={
        firstName : req.body.prof.firstName,
        middleName : req.body.prof.middleName,
        lastName : req.body.prof.lastName,
        email: req.body.prof.email,
        
        phoneNo:req.body.prof.phoneNo,
        highestQuali:req.body.prof.highestQuali,
        }
        var prof = new Profsignup(prof);
        prof.save();
});

// Prof signup ends here


// Notification section starts here

app.post('/inserted',function(req,res){
   
    console.log(req.body);
   
    var student= {       
        studentName : req.body.student.studentName,
        enrolledCourse : req.body.student.enrolledCourse,
        enrollDate : req.body.student.enrollDate,
        coursePeriod :req.body.student.coursePeriod,
        starRating : req.body.student.starRating,
        instiName : req.body.student.instiName,
   }       
   var student = new StudentData(student);
   student.save();
});
app.get('/students',function(req,res){
    
    StudentData.find()
                .then(function(students){
                    res.send(students);
                });
});

// Enroll delete starts here 

app.delete('/removed/:id',(req,res)=>{
   
    id = req.params.id;
    StudentData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

  
    


 //start server
 app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


















 