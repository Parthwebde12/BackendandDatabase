const express = require('express');
const path = require('path'); 
const userModel= require('./models/user')

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/read', async(req, res) => {
   let users=  await userModel.find()
    res.render("read",{users});
});
app.post('/create', async(req, res) => {
    let {name , email , image}= req.body;  //we are destructing here so we wil not do req.body call agin

     let user= await userModel.create({
       name,  //we can write name only nd that would work too
      email ,
      image
    })
    res.send(user)
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});