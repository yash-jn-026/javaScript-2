const accountId = 144553
let accountEmail ="yashjain@gmail.com"
var accountPassword  = "yj12"
accountCity = "delhi"
let accountState;

// accountId ="1" // not Allowed

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "yj@gmail.com"
accountPassword ="8989"
accountcity =" goa"

console.log(accountId);

console.table([accountId,accountEmail, accountPassword, accountcity, accountState])
