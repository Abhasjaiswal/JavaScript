// Functions in JavaScript
// A function is a block of code that performs a specific task.
// Functions are reusable blocks of code that can be called multiple times.
// Functions are used to group code, to make the code more readable and maintainable.
// Functions are defined using the function keyword followed by the function name and parentheses ().
// The code block of a function is enclosed in curly braces {}.
// A function can have parameters. Parameters are variables that are used to pass values to the function.

// Syntax:
// function functionName(parameters) {
//     // code block
//     // code block
//     // code block
//     // code block
//     }
//     functionName(); // calling the function
//
//
//     Example:

function greet() {
  console.log("Hello World!");
}

greet(); // calling the function

// Function Definition
// A function definition consists of the function keyword, followed by the function name, parentheses (), and a code block.

// Syntax:
// function functionName() {
//    // code block
//
//  }
//

// function fucntionName(parameters) {
//    // code block
//
//    }
//

// Function call
//
// A function is called by its name followed by parentheses ().
// Syntax:
// functionName();
//

function myfunction(msg) {
  console.log(msg);
}

myfunction("Hello World!"); // calling the function
myfunction("Welcome to JavaScript!"); // calling the function

// Function Parameters
// A function can have parameters. Parameters are variables that are used to pass values to the function.
// Parameters are specified inside the parentheses () in the function definition.
// You can add as many parameters as you want, just separate them with a comma.
// When calling a function with parameters, you can pass the values in the parentheses ().
//
// Syntax:
// function functionName(parameter1, parameter2, parameter3) {
//   // code block
//
//   }
//

function add(a, b) {
  console.log(a + b);
}

add(10, 20); // calling the function

// Function Mutiplication
//
function multiply(a, b) {
  // here a & b are local variables
  m = a * b;
  return m;
}

let x = 10;
let y = 20;

z = multiply(x, y); // calling the function
console.log(z);
