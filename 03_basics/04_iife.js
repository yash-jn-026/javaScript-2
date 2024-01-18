
//named iife
(function chai(){
   
    console.log(`DB CONNECTED`);
})();

// non name iife

((name)=>{
    console.log(`DB Connected ${name}`);
})('yash');