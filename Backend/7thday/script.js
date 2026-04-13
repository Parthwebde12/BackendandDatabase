const express = require('express');

const app = express();
 

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//middleware
app.use(function(req , res ,next){
  console.log('middleaware start');
  next();
});

app.use(function(req , res ,next){
  console.log('middleaware aur ek baar');
  next();
});
// router

app.get("/" , function(req, res){
   res.send("Champion mera ")
})
app.get("/profile" , function(req, res){
    res.send("Let it work")
})
app.get("/about" , function(req, res,next){
    return next(new Error("Something Wrong"))
})
// Error Hanlding
app.use(function(err , req , res,next){
   console.error(err.stack)
   res.status(500).send('Something Broke!')
});
app.listen(3000);

//Middleware

