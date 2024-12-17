// Conditional Statements in JavaScript
//
// 1. if statement
// if (condition) {
//  // code to be executed if the condition is true
//  }
//
let a = 5,
  b = 10;
if (a < b) {
  console.log("a is less than b");
}

// to check multiple conditions
//
if (a < b && a > 0) {
  console.log("a is less than b and greater than 0");
}

// 2. if-else statement
// if (condition) {
// // code to be executed if the condition is true
// } else {
// // code to be executed if the condition is false
// }
//
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// 3. else-if statement
// if (condition1) {
// // code to be executed if condition1 is true
// } else if (condition2) {
// // code to be executed if condition2 is true
//
//  } else {
//  // code to be executed if both condition1 and condition2 are false
//  }

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// 4. Nested if-else statement
// if (condition1) {
// // code to be executed if condition1 is true
// if (condition2) {
// // code to be executed if condition2 is true
// }
// } else {
// // code to be executed if condition1 is false
// }
// }

if (a > b) {
  console.log("a is greater than b");
  if (a > 0) {
    console.log("a is greater than 0");
  }
}

// 5. Ternary Operator
// condition ? expression1 : expression2
// If the condition is true, the ternary operator returns expression1; otherwise, it returns expression2.
//
// For example:

let result = a > b ? "a is greater than b" : "a is less than b";
console.log(result);

// 6. Switch statement
// switch (expression) {
// case value1:
// // code to be executed if expression is equal to value1
// break;
// case value2:
// // code to be executed if expression is equal to value2
// break;
// case value3:
// // code to be executed if expression is equal to value3
// break;
// default:
// // code to be executed if expression is different from all values
// }
//
// The switch statement evaluates the expression and compares it with the values of each case.

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Invalid day");
}
