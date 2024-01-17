//dates
let myDates = new Date()

console.log(myDates.toString())
console.log(myDates.toDateString())
console.log(myDates.toISOString())
console.log(myDates.toJSON())
console.log(myDates.toLocaleDateString())
console.log(myDates.toLocaleString())

console.log(typeof myDates)

//let myCreatedDate  = new Date(2023, 0, 23)
//let myCreatedDate  = new Date(2023, 0, 23,5,3)
// let myCreatedDate  = new Date("2023-01-23")


let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//console.log(`The date is ${newDate.getDate()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday:"long",
    
})


