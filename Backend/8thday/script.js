const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({urlencoded:true}));

app.get("/",function(req , res){
    res.send("Its Working");
})


app.listen(3000,function () {

    console.log("Its running")
})