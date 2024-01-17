// singleton
// object.create

// objects literals

const mySyb = Symbol("key1")

const JsUser = {
    name: "yash jain",
    "full name":'yashjain' ,
    [mySyb]:"myKey1",
    age:19,
    location:"delhi",
    email:"ys@google.com",
    isLoggedIn :false,
    lastloginDays :["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySyb])

JsUser.email ="yash.github.com"
//Object.freeze(JsUser)
JsUser.email ="yash.microsoft.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("helloe Js user")
}

JsUser.greetingTwo = function(){
    console.log(`helloe Js user,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

