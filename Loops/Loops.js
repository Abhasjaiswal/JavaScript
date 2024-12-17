// Loops in JavaScript
//
// 1. for loop
// for (initialization; condition; increment/decrement) {
// // code to be executed
// }
//
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while loop
// while (condition) {
// // code to be executed
// }
//
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. do-while loop
// do {
// // code to be executed
// } while (condition);
//
// The do-while loop is similar to the while loop, except that the condition is checked after the execution of the code block.
// This means that the code block will be executed at least once, even if the condition is false.
// The do-while loop is used when you want to execute the code block at least once, regardless of the condition.
//
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// 4. for-in loop
// The for-in loop is used to iterate over the properties of an object.
// for (variable in object) {
// // code to be executed
// }
// The variable is a string that represents the key of the object property.
// The object is the object that you want to iterate over.
// The code block will be executed for each property of the object.

const student = {
  name: "Abhas Jaiswal",
  age: 21,
  isAdult: true,
  subjects: ["Maths", "Science", "English"],
};

for (let key in student) {
  console.log(key, student[key]);
}

// 5. for-of loop
// The for-of loop is used to iterate over the elements of an array or any iterable object.
// for (variable of iterable) {
// // code to be executed
// }
// The variable is a reference to the current element of the iterable.
// The iterable is the array or any iterable object that you want to iterate over.
// The code block will be executed for each element of the iterable.

const subjects = ["Maths", "Science", "English"];

for (let subject of subjects) {
  console.log(subject);
}
// Output:
// Maths
// Science
// English
//

// 6. break statement
// The break statement is used to exit a loop before the condition is false.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output:
// 0
// 1
// 2
// The loop will exit when the value of i is 3.
//

// 7. continue statement
// The continue statement is used to skip the current iteration of a loop and continue with the next iteration.
//
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Output:
// 0
// 1
// 2
// 4
// The loop will skip the iteration when the value of i is 3 and continue with the next iteration.

// 8. Nested loops
// You can nest loops inside each other to create complex patterns or iterate over multi-dimensional arrays.
// for (initialization; condition; increment/decrement) {
// // code to be executed
// for (initialization; condition; increment/decrement) {
// // code to be executed
// }
//
// }
// The inner loop will be executed for each iteration of the outer loop.
// The nested loops can be of any type: for, while, do-while, for-in, or for-of.
// The nested loops can be of the same type or different types.
// The nested loops can have different conditions and increments/decrements.
// The nested loops can have different code blocks.
// The nested loops can have different break and continue statements.
// The nested loops can have different loop control variables.
// The nested loops can have different loop control variable scopes.
//
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
// Output:
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2
// The inner loop will be executed for each iteration of the outer loop.
//

// 9. Loop control statements
// The loop control statements are used to control the flow of the loop.
// The loop control statements are break, continue, and return.
// The break statement is used to exit the loop.
// The continue statement is used to skip the current iteration of the loop.
// The return statement is used to exit the function and the loop.
// The loop control statements can be used inside any type of loop: for, while, do-while, for-in, or for-of.
// The loop control statements can be used inside nested loops.
// The loop control statements can be used inside if-else statements.
// The loop control statements can be used inside switch statements.
// The loop control statements can be used inside functions.
// The loop control statements can be used inside arrow functions.
// The loop control statements can be used inside callback functions.
// The loop control statements can be used inside event listeners.
// The loop control statements can be used inside asynchronous functions.
// The loop control statements can be used inside promises.
// The loop control statements can be used inside async/await functions.
// The loop control statements can be used inside generators.
// The loop control statements can be used inside iterators.
// The loop control statements can be used inside classes.
// The loop control statements can be used inside modules.
//

// 10. Infinite loops
// An infinite loop is a loop that never stops.
// An infinite loop can be created by omitting the increment/decrement in the loop condition.
// An infinite loop can be created by using a condition that is always true.
// An infinite loop can be created by using a condition that is always false.
//
//
// for (let i = 0; i < 5; ) {
//  console.log(i);
//  }
//  The loop will run indefinitely because the increment/decrement is missing in the loop condition.
//
//  while (true) {
//  console.log("Hello, World!");
//  }
//  The loop will run indefinitely because the condition is always true.
//
//
