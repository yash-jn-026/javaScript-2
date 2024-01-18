const coding = ["js", "rb","py", "java"]

// coding.forEach( function (val){
//     console.log(val);
// })

//-----------------

// coding.forEach((item)=>{
//     console.log(item);
// })

//-----------------

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe)

//-----------------

// coding.forEach((item ,index , arr)=>{
//     console.log(item, index ,arr);
// })

const myCoding = [
    {
        language:'javaScript',
        filName :'js'

    },
    {
        language:'ruby',
        filName :'rb'

    },
    {
        language:'python',
        filName :'py'

    }
]

myCoding.forEach((item)=>{
    console.log(item.filName);

})