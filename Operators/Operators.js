// Operators in JavaScript

// 1. Arithmetic Operators

let a = 10,
  b = 20;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // remainder
console.log(a ** b); // exponentiation

// Unary Operators
a++;
console.log(a);

b--;
console.log(b);

++a;
console.log(a);

--b;
console.log(b);

// 2. Assignment Operators

let x = 10;
let y = 20;
x += y; // x = x + y
console.log(x);

x -= y; // x = x - y
console.log(x);

x *= y; // x = x * y
console.log(x);

x /= y; // x = x / y
console.log(x);

x %= y; // x = x % y
console.log(x);

x **= y; // x = x ** y
console.log(x);

// 3. Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

console.log(10 == 10); // true , used for comparing values
console.log(10 === 10); // true, used for comparing values and data types
console.log(10 != 10); // false, used for comparing values
console.log(10 !== 10); // false, used for comparing values and data types
console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true

// 4. Logical Operators
// &&, ||, !
//
// && - Logical AND
// || - Logical OR
// ! - Logical NOT
// for example
// true && true => true
// true && false => false
// false && true => false
// false && false => false
//
// true || true => true
// true || false => true
// false || true => true
// false || false => false
//
// !true => false
// !false => true
//

let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true
console.log(!condition1); // false
console.log(!condition2); // true
