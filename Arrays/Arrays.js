// Arrays in JavaScript
// An array is a special variable that can hold more than one value at a time.
// The values in an array are called elements.
// The elements in an array can be of different data types.
// An array can hold any type of data, including numbers, strings, objects, functions, and even other arrays.
// An array is created by placing the values inside square brackets [] separated by commas.

let Students = ["Abhas", "Rahul", "Rohit", "Rajesh", "Ramesh"];
let Marks = [90, 85, 80, 75, 70];
let Subjects = ["Maths", "Science", "English", "Hindi", "Social Studies"];
let address = ["Bengaluru", 560001, "Karnataka", "India"];
let mixedArray = ["Abhas", 25, "Bengaluru", 560001, "Karnataka", "India"];

// Accessing Elements
// We can access the elements of an array using the index.
// The index of an array starts from 0.
// We can access an element of an array using the index in square brackets [].
// We can also access an element of an array using the index stored in a variable.

console.log(Students[0]); // Abhas
console.log(Marks[1]); // 85
console.log(Subjects[2]); // English
console.log(address[3]); // India
console.log(mixedArray[4]); // Karnataka

// Modifying Elements
// We can modify the elements of an array using the index.
// We can change the value of an element of an array using the index in square brackets [].
// We can also change the value of an element of an array using the index stored in a variable.
//
//
Students[0] = "Abhas";
Marks[1] = 85;
Subjects[2] = "English";
address[3] = "India";
mixedArray[4] = "Karnataka";

console.log(Students[0]); // Abhas
console.log(Marks[1]); // 85
console.log(Subjects[2]); // English
console.log(address[3]); // India
console.log(mixedArray[4]); // Karnataka

// Looping Through an Array
// We can loop through the elements of an array using a for loop.

for (let i = 0; i < Students.length; i++) {
  console.log(Students[i]);
}

// We can also use for in and for of loops to loop through the elements of an array.

for (let student of Students) {
  console.log(student);
}

// Lets say we want to print the students in a way that the names are in upper case

for (let student of Students) {
  console.log(student.toUpperCase());
}

// Array Methods
// JavaScript provides a number of methods to work with arrays.
// Here are some commonly used array methods:
// 1. push(): It adds one or more elements to the end of an array.

Students.push("Rajesh");

//2. pop(): It removes the last element from an array.

Students.pop();

// 3. tostring(): It converts an array to a string.

console.log(Students.toString());

// 4. concat(): It concatenates two or more arrays.
// The concat() method does not change the existing arrays. It returns a new array.

let Students1 = ["Abhas", "Rahul", "Rohit"];
let Students2 = ["Rajesh", "Ramesh"];

let AllStudents = Students1.concat(Students2);
console.log(AllStudents);

// 5. unshift (): It adds one or more elements to the beginning of an array.
// The unshift() method changes the length of the array.

Students.unshift("Rajesh");
console.log(Students);

// 6. shift(): It removes the first element from an array.

Students.shift();

// 7. slice() : It extracts a part of an array and returns a new array.
// The slice() method does not change the existing array. It returns a new array.
// The first parameter is the index where the extraction will start.
// The second parameter is the index where the extraction will end.
// The slice() method extracts up to but not including the end parameter.

let marvelHeros = [
  "Antman",
  "Black Panther",
  "Captain America",
  "Doctor Strange",
];

console.log(marvelHeros.slice(1, 3)); // ['Black Panther', 'Captain America']

// 8. splice(): It adds or removes elements from an array.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// The first parameter is the index where the modification will start.
// The second parameter is the number of elements to remove.
// The third parameter is the new element(s) to add.
// The splice() method returns an array of the removed elements.
// The splice() method modifies the original array.
// If the second parameter is 0, no elements are removed.
// If the second parameter is omitted, all elements from the start index to the end of the array are removed.
// If the first parameter is greater than the length of the array, no elements are removed.

splicedHeros = marvelHeros.splice(1, 2, "Ironman", "Hulk"); // this code will remove Black Panther and Captain America and add Ironman and Hulk
