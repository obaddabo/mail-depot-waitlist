const mongoose  = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema();



const emailSchema = new Schema({
    email : {
        type : string, 
        required : true
    }
});

const Email = mongoose.model('Email', emailSchema);