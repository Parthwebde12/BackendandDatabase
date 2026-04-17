const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({urlencoded:true})); //we will be handle form data 
app.set('view engine','ejs'); // render kar sakte ejs pages ko
app.use(express.static(path.join(__dirname,'public'))); //public static files use kra payenge

app.get("/",function(req , res){
    res.render("index");  //
})

//ab usi url ko dyanamic banane ke liye find karo kaunsa part dynamic hain and : aage ye lagaga do

app.get("/profile/:username",function(req , res){
    // req.params.username
    res.send(`welcome, ${req.params.username}`)
})
app.get("/author/:username/:age",function(req , res){
    res.send(`welcome, ${req.params.username} of ${req.params.age}`)
})


app.listen(3000,function () {

    console.log("Its running")
})
