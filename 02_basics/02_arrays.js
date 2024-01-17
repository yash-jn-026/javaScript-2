const marvel_Heros = ["thor", "Ironman", "spiderman"]
const dC_heros = ["superman", "flash", "batman"]

//marvel_Heros.push(dC_heros)

//console.log(marvel_Heros)
//console.log(marvel_Heros[3][1])

//const allHeros = marvel_Heros.concat(dC_heros)
//console.log(allHeros)

const all_new_heros = [...marvel_Heros, ...dC_heros]
//console.log(all_new_heros)


const unotherArray = [1, 2, 3, [4, 5, 6], 7,[6, 7, [2, 6]]]

const real_another_array = unotherArray.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("yash"))
console.log(Array.from({name : "yash"}))// interesting

let score = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score,score2, score3))