const name ="yash"
const repoCount = 50 

 
console.log (name + repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)


const gameName = new String('yyYah-hhhn-898')
console.log(gameName[0]);
console.log(gameName .__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("a"))
console.log(gameName.split('-'))

const newstr = gameName.substring(0,4)
console.log(newstr)

const unotherStr = gameName.slice(-8,-4)
console.log(unotherStr)

const newStr2 ="   yashjain   "
console.log(newStr2)
console.log(newStr2.trim())

const url =" htps://yashjian.com/yash%20jain"
console.log(url.replace('%20', '-'))

console.log(url.includes('yash'))
console.log(url.includes('hitesh'))

