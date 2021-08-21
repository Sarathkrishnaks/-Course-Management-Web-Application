const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MEANStackDB');
const Schema = mongoose.Schema;

var NewStudentSchema = new Schema({
    studentName : String,
    enrolledCourse : String,
    enrollDate : String,
    coursePeriod:String,
    starRating :Number,
    instiName: String
});

var Studentdata = mongoose.model('student', NewStudentSchema);                       

module.exports = Studentdata;