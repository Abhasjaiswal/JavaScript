let message;

message = "Hello, World!";

console.log(message);

// We can also declare mutiple variables in a single line

let message1, age, name;

message = "Hello ! Abhas Jaiswal";
age = 21;
name = "Abhas";

console.log(message);
console.log(age);
console.log(name);

// We can also use 'null' and 'undefined' to declare a variable
// 'null' is used to declare a variable with no value
// 'undefined' is used to declare a variable with no value
//
//
message = null;
age = undefined;

console.log(message);
console.log(age);

// We can also store boolean values in a variable
let isFollow = false;
console.log(isFollow);

// Unlike other programming languages we don't have to specify the type of the variable
// JavaScript automatically detects the type of the variable

// Differences between let , const and var
// var can be redeclared and updated ( A global scope variable)
// let can be updated but not redeclared (A block scope variable)
// const can't be updated or redeclared (A block scope variable)
