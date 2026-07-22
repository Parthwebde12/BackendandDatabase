const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp")

const userSchema= mongoose.Schema({
    iamge: String, //we are writing a URL , and thats a String
    email : String,
    name: String
})

module.exports=mongoose.model('user',userSchema);
