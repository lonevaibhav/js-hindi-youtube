let score="100";


console.log(typeof(score)) ;
console.log(typeof score);



let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
// 100=>number
// "100abc"=>NaN
// true=>1
// false=>0
// null=>0
// undefined=>NaN
// " "=>0

let isLoggedIn= null;
let valueInBoolean=Boolean(isLoggedIn) ;
console.log(typeof valueInBoolean);
console.log(valueInBoolean); 



//"vaibhav"=>true
// ""=>false
// 0=>false
// 1=>true
// null=>false
// undefined=>false

let someValue=123;
let valueInString=String(someValue);
console.log(typeof valueInString);
console.log(valueInString); 