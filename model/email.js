const mongoose  = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const emailschema = new Schema({
  email :{
    type : String,
    required : true
  }
})




const Email = mongoose.model('Email', emailschema);

module.exports = Email;

