const accountID=14415
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="New Delhi"
let accountState;

// accountID=234567 a const variable cannot be channged 
// var is not preferred to use because of scope problems
// let variable solved the problem of scope because it is block bounded
accountEmail="xyz@gmail.com"
accountPassword="987654"
accountCity="bihar"

console.table([accountID, accountEmail,accountPassword,accountCity,accountState])