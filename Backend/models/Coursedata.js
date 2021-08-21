const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MEANStackDB');
const Schema = mongoose.Schema;

var NewCourseSchema = new Schema({
    title : String,
    mentor: String,
    coursePeriod: String,
    imageUrl: String

});

 var Coursedata = mongoose.model('course',NewCourseSchema);
 module.exports = Coursedata;