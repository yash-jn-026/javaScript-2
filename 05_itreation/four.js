const myObj ={
    js :"javaScript",
    cpp: "c++",
    rb: "ruby",
    sf:"swift"
       
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);

    
}

const programming = ["js", "rb","py", "java"]

for (const key in programming) {
    console.log(programming[key]);
        
    
}

// its not itratable
// const map = new Map()
// map.set('IN' ,"india")
// map.set('USA' ,"united state of america")
// map.set('FR' ,"France")
// map.set('USA' ,"united state of america")

// for (const key in map) {
//     console.log(key);
    
// }

