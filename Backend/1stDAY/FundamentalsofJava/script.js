//Fundamentals of JS


//1. array and objects

var arr= [1,2,3,4];
// 1.forEach
arr.forEach(function(val){
   console.log(val + "  hello");
})


//2.map
 var  newarr = arr.map(function (val) {
    return 13;
    
})

console.log(newarr);

//3.filter

var ans = arr.filter(function(val){
  if(val >= 3){ return true;}
  else return false;
})
 console.log(ans);

//4.find
var ans1 =arr.find(function (val) {
    if(val==2) return val;
    
})
console.log(ans1);


  var obj = {
    name :"harsh",
    age : 26,
}
obj.age;
obj.name;