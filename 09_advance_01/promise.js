const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("====================================");
    console.log("Async function done");
    console.log("====================================");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("====================================");
  console.log("promise Consumed");
  console.log("====================================");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("====================================");
    console.log("async task too");
    resolve();
    console.log("====================================");
  }, 1000);
}).then(function () {
  console.log("async two resolved ");
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "chai ",
      email: "yashjain@gmail.com",
    });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "yash",
        password: "1234",
      });
    } else {
      reject("Error:Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log("====================================");
    console.log(username);
    console.log("====================================");
  })
  .catch(function (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "javaScript",
        password: "1234",
      });
    } else {
      reject("Error:js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const responce = await promiseFive;
    console.log("====================================");
    console.log(responce);
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}
consumePromiseFive();

// async function getAllUser() {
//   try {
//     const respone = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await respone.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }

// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
