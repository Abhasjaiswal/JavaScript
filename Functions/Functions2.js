// Arrow Functions in JavaScript
//
// Arrow functions are a new way to write functions in JavaScript. They are more concise and easier to read than traditional functions.
// Arrow functions are defined using the => syntax.
// The => syntax is called the arrow function syntax.
// Arrow functions do not have their own this value. They inherit the this value from the surrounding code.
// Arrow functions are always anonymous. They do not have a name.
// Arrow functions are best suited for non-method functions.
//
// Syntax:
// const functionName = (parameters) => {
//   // code block
//   // code block
//   }

// Sum Function

const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 10)); // Output: 15
