"use strict";



let name="vaibhav";
let age=25;
let isLoggedIn=false;

console.log("vaibhav")


// Data Types in JavaScript
// 1. Primitive Data Types
//    - Number
//    - String
//    - Boolean
//    - Undefined
//    - Null
//    - Symbol (ES6)
//    - BigInt (ES11)
// 2. Non-Primitive Data Types
//    - Object
//    - Array
//    - Function
// 3. Type Conversion
//    - Implicit Conversion
//    - Explicit Conversion
// 4. Type Checking
//    - typeof Operator
//    - instanceof Operator
// 5. Type Coercion
//    - Automatic Type Conversion
//    - Loose Equality (==) vs Strict Equality (===)
// 6. Special Data Types
//    - NaN (Not a Number)
//    - Infinity and -Infinity
// 7. BigInt
//    - Represents integers with arbitrary precision
//    - Created using BigInt() function or appending 'n' to the end of an integer literal
// 8. Symbol
//    - Unique and immutable data type introduced in ES6
//    - Used to create unique identifiers for object properties 
// 9. Null vs Undefined
//    - Null: Represents intentional absence of any value
//    - Undefined: Represents a variable that has been declared but not assigned a value
// 10. Object Types
//     - Objects: Collections of key-value pairs
//     - Arrays: Special type of object for ordered collections
//     - Functions: First-class objects that can be called and passed around
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol('symbol')); // symbol
console.log(typeof BigInt(12345678901234567890)); // bigint
