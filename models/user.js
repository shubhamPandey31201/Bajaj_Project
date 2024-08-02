const mongoose = require("mongoose");
//const passportLocalMongoose=require("passport-local-mongoose");

const Schema = mongoose.Schema;



const userSchema = new Schema({
  status: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    required: true,
  },
  collegeEmailId: {
    type: String,
    required: true,
  },
  collegeRollNumber: {
    type: String,
    required: true,
  },
  numbers: [{ type: String }],
  alphabets: [{ type: String }],
});



const User = new mongoose.model("User", userSchema);

module.exports = User;
