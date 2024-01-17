function sayMyName() {
    console.log("y");
    console.log("a");
}
//sayMyName()

function addTwoNumber(num1, num2) {
    console.log(num1 + num2)
}
//addTwoNumber(3 ,9)





function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("yash"))
//console.log(loginUserMessage())



function calculateCartPrice(...num) {
    return num

}
//console.log(calculateCartPrice(220,793,900))


const user = {
    username: "yash",
    price: 89

}

function handleObj(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObj(user)




const myNewArray = [200, 1110, 9900]

function returnVal(getArray) {
    return getArray[1]
}
console.log(returnVal(myNewArray));

console.log(returnVal([900, 550, 1110]));






