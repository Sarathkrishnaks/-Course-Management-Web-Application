const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MEANStackDB');
const Schema = mongoose.Schema;

var NewProfSchema = new Schema({
    firstName : String,
    middleName : String,
    lastName : String,
    email: String,
    phoneNo: Number,
    highestQuali:String
});

 var ProfData = mongoose.model('prof',NewProfSchema);
 module.exports = ProfData;