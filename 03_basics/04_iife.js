
//named iife
(function chai(){
   
    console.log(`DB CONNECTED`);
})();

// non name i ife

((name)=>{
    console.log(`DB Connected ${name}`);
})('yash');