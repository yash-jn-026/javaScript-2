// for of 

const arr =[ 1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
}

const greetings = " hello world "
for (const greet of greetings) {
    console.log(`each var is ${greet}`);
}


//   Maps

const map = new Map()
map.set('IN' ,"india")
map.set('USA' ,"united state of america")
map.set('FR' ,"France")
map.set('USA' ,"united state of america")

//console.log(map);

for (const [key,value] of map) {
    console.log(key, ':', value);
}


//  this does not working of obejct
   
// const myObj = {
//     gamme1 : "nfs",
//     gamme2 : "gta"
// }

// for (const game of myObj) {
//     console.log(key, ':', value);
// }

//
    
