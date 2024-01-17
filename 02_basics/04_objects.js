//const tenderUser = new Object()// singleton obj

const tinderUser = {}
tinderUser.id = "123bd"
tinderUser.name = "yash jain"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularUser = {
    email: "someEmail@email.com",// 
    fullname: {
        firstName: "yash",
        lastName: 'jain'
    }
}

//console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "c", 6: "d" }

//const obj3 = Object.assign({}, obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2, ...obj4 }
//console.log(obj3);

const user =
    [
        {
            id: 1,
            email: "yh@gmail.com"
        },
        {
            id: 2,
            email: "yh@gmail.com"
        },
        {
            id: 3,
            email: "yh@gmail.com"
        },
        {
            id: 4,
            email: "yh@gmail.com"
        },
    ]

user[1].email

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn')); 


const course = {
    courseName:" js with chai",
    price:999,
    courseInstructor: "yash jain"


}

const {courseInstructor: instructor} = course
console.log(instructor);
