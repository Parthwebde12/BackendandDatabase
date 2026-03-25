const fs = require('fs');

fs.writeFile("hey.txt","Hey my name is parth",function (err) {
  if(err) console.error(err);
  else console.log("done");
    
})
fs.appendFile("hey.txt","I am learning Node",function (err) {
  if(err) console.error(err);
  else console.log("done");
    
})


fs.renameFile("hey.txt","Hello.txt",function (err) {
  if(err) console.error(err);
  else console.log("done");
    
})
fs.copyFile("Hello.txt","./copy.txt",function (err) {
    if(err) console.error(err);
    else console.log("done");
    
})

fs.unlink("Hello.txt",function (err) {
    if(err) console.error(err);
    else console.log("removed");
    
})