function abcd() {
    return "hello"
    
}

// Asynchronous JS
 async function abcd (){
  var blob = await fetch('url')
  var ans = blob.json();
  console.log(ans.results);
}
abcd();