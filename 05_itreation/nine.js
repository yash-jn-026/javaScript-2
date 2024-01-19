const myNum = [1,2,3]

// const nyTotal = myNum.reduce(function(acc, curVal){
//     console.log(`acc : ${acc} and carval: ${curVal}`);

//     return acc + curVal

// }, 0)

const nyTotal = myNum.reduce((acc, carVal)=> acc + carVal,0);

//console.log(nyTotal);

const shoppingCart =[
    {
        itemName : "py-Course",
        price :900
    },
    {
        itemName : "ts-Course",
        price :9078
    },
    {
        itemName : "js-Course",
        price :9009
    },
    {
        itemName : "shoift-Course",
        price :9000
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=>acc + item.price, 0)
console.log(priceToPay);