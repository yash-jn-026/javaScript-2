// arrays 

const myArr = [0, 1, 2, 3, 5]
const myheors = ["ironman", "spiderman"]
const myArry2 = new Array(1, 2, 3, 4)

//console.log(myArr[1])


//console.table([myArr, myheors, myArry2])

// array methods 

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//console.log(myArr)
//myArr.shift()
//console.log(myArr)

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(3))

//const newArr = myArr.join()
//console.log(newArr)
//console.log(typeof newArr)
//console.log(myArr)

// slice , splice

console.log("A", myArr)
const myN1 = myArr.slice(1, 3)
console.log(myN1)
console.log("B", myArr)

const myN2 =myArr.splice(1, 3)
console.log("C", myArr)
console.log(myN2)