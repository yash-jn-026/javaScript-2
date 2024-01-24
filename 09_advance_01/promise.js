const promiseOne = new Promise(function(resolve, reject){
    // do an async take 
    // db call , network call
  setTimeout(function(){
    console.log('async take done');
  },1000)  
})

promiseOne.then(function(){
    console.log("promise consumed");

})