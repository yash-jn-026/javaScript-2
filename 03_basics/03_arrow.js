const user = {
    username: "yash jain",
    price: 89,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website `)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username ="raja"
// user.welcomeMessage() 


// console.log(this)


// function chai(){
//     let username = "yash" 
//     console.log(this.username);

// }
// chai()

const chai = () => {
    let username = "yash"
    console.log(this);
}
chai()

// const addTwo = (num1,)=>{
//     return num1 + num2

// }

// const addTwo = (num1,num2)=> num1 + num2

// const addTwo = (num1,num2)=> ( num1 + num2)

const addTwo = (num1,num2)=>({username:"yash"})


console.log(addTwo(3,0))