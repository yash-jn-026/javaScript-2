// primitive type 
/*
Types : string, boolern, Number, Null, undefined, symbol,
bigInt
*/
const score = 100
const scoreVal =100.3

const isloggedIn  = true
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 123456789098765434567n

// Referance (non primitive)

/*
Types : Array, Objects, Functions
*/


const heros = ['ironman', 'spiderman' , 'doga']

let myobj={
    name:"yash",
    age: 21
}

const myfunction = function(){
    console.log("helloWorld")
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/