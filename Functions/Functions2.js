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

console.log(sum(5, 10));

// For each Loop in Arrays using Arrow Functions

arr = [
  "apple",
  "banana",
  "cherry",
  "dates",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "ximenia",
  "yuzu",
  "zucchini",
];

arr.forEach((fruit) => {
  console.log(fruit);
});

arr.forEach((fruit, index) => {
  console.log(index, fruit.toUpperCase());
});

// For Each Method is a higher order fucntion
// A higher-order function is a function that takes another function as an argument or returns a function as a result.

// Question : For a given array of numbers, print the square of each vlaue using for each loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((num) => {
  console.log(num * num);
});

// Map Method in Arrays using Arrow Functions

// The map() method creates a new array by calling a function on each element in the original array.

let newArr = numbers.map((num) => {
  return num;
});

console.log(newArr);

// Filter Method

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

// Reduce Method
// The reduce() method reduces the array to a single value.

let sumOfNumbers = numbers.reduce((acc, num) => {
  return acc + num;
});

console.log(sumOfNumbers);

// Finding largest number using reduce

let largestNum = numbers.reduce((acc, num) => {
  return acc > num ? acc : num;
});

console.log(largestNum);

// Question: We are given array of marks of students. Filter out the marks of the students who scored more than 90+

marks = [
  90, 80, 70, 60, 50, 40, 30, 20, 10, 100, 95, 85, 75, 65, 55, 45, 35, 25, 15,
  5,
];

let filteredMarks = marks.filter((mark) => mark > 90);

console.log(filteredMarks);

/* Take a number n as input from the user.
 * Create an array of n numbers.
 * Use reduce method to find the sum of the array.
 */

let input = prompt("Enter a number: ");
let arr2 = [];
for (let i = 0; i <= input; i++) {
  arr2.push(i);
}

let SumofArray = arr2.reduce((acc, num) => acc + num);

console.log(SumofArray);
