const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
});

app.get('/create', async (req, res) => {
    try {
        const createdUser = await userModel.create({
            name: "parth",
            email: "parthwakodikar4@gmail.com",
            username: "parth"
        });

        res.send(createdUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/update',async(req,res)=>{
      let updateduser = await userModel.findOneAndUpdate({username:"parth"},{name: "parth wakodikar"},{new:true})

})

app.get("/read",(req,res)=>{
      let readusers= await userModel.find()
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});