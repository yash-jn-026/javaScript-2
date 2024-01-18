//if

if (true) {

}

if (false) {

}


// <, >, <= ,>=, !=, == ,===, !==

const balance = 1000
// short hand notation
//if(balance>300) console.log("Test")

// if (balance < 500) {
//     console.log("less than ")
// } else if (balance < 750) {
//     console.log("less than 750")
// }
// else {
//     console.log("less than 1200")
// }


const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if (loggedInFromEmail|| loggedInFromGoogle){
    console.log("user logged IN");
}