const { log } = require('console');
const express = require('express');
const app = express()
const fs = require('fs');
const path = require("path");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));


app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) {
            console.log(err);
            return res.send("Error");
        }

        console.log(files);
        res.render("index", { files: files });
    });
});



app.get('/files/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        
        if (err) {
            console.log(err);
            return res.send("File not found");
        }

        res.render('show', {
            filename: req.params.filename,
            content: filedata
        });
    });
});
app.get('/edit/:filename', function(req, res){
    res.render('edit' ,{filename: req.params.filename});
});
app.post('/edit/:filename', function(req, res){
  fs.rename(`./files/${req.body.previous}` ,`./files/${req.body.new}`, function(err) {
    res.redirect("/")
    
  })
});


app.post('/create', function (req, res) {
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details,function(err) {
        res.redirect("/")
    
    })
});

app.listen(3000);