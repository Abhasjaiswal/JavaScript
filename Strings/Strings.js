// String in JavaScript
// String is a sequence of characters used to represent text.
// In JavaScript, strings are surrounded by quotes.
// We can use single or double quotes to represent a string.
//
// Example
const Name = "Abhas Jaiswal";
console.log(Name); // Abhas Jaiswal
// String Length
// The length property returns the length of a string (number of characters).
console.log(Name.length); // 12

// String Indices
// In JavaScript, we can access the characters in a string using the index.
// The index starts from 0.
// The first character is at index 0, the second character is at index 1, and so on.
// We can access the characters in a string using the index in square brackets.
//
console.log(Name[0]); // A
console.log(Name[1]); // b
console.log(Name[2]); // h
console.log(Name[3]); // a
console.log(Name[4]); // s
console.log(Name[5]); //
console.log(Name[6]); // J
console.log(Name[7]); // a
console.log(Name[8]); // i
console.log(Name[9]); // s
console.log(Name[10]); // w
console.log(Name[11]); // a
console.log(Name[12]); // l

// Template Literals
// Template literals are string literals that allow embedded expressions.
// We can use template literals to embed variables and expressions in a string.
// Template literals are enclosed in backticks (` `) instead of quotes.
// We can embed variables and expressions in a template literal using the ${} syntax.
// The expressions inside the ${} syntax are evaluated and the result is embedded in the string.
//
//

const Name1 = "Abhas";
const Age = 25;
const City = "Bengaluru";
const Message = `My name is ${Name1}. I am ${Age} years old. I live in ${City}.`;
console.log(Message);

// String Methods
// JavaScript provides a number of methods to work with strings.
// Here are some commonly used string methods:
//
// 1. toUpperCase(): It returns the string with all characters in uppercase.
// 2. toLowerCase(): It returns the string with all characters in lowercase.
//
str = "Hello, World!";
console.log(str.toUpperCase()); // HELLO, WORLD!

console.log(str.toLowerCase()); // hello, world!

// 3. trim(): It removes whitespace from both ends of a string.

str = "   Hello, World!   ";

console.log(str.trim()); // Hello, World!

// 4. slice (start, end): It extracts a part of a string and returns a new string.
// The start parameter is the index where the extraction will start.
// The end parameter is the index where the extraction will end.

str = "Hello, World!";
console.log(str.slice(7, 12)); // World

// If the end parameter is omitted, slice() extracts to the end of the string.

// 5. concat(): It concatenates two or more strings and returns a new string.
str1 = "Hello, ";
str2 = "World!";
console.log(str1.concat(str2)); // Hello, World!

// 6. replace(): It replaces a specified value with another value in a string.
// The first parameter is the value to be replaced.
// The second parameter is the value to replace the first parameter with.
// The replace() method replaces only the first occurrence of the specified value.
//
str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!

// 7. charAt(): It returns the character at a specified index in a string.
// The index starts from 0.
// The charAt() method returns an empty string if the index is out of range.
// The charAt() method is similar to accessing characters using the index in square brackets.
// The charAt() method is useful when we want to access characters using variables.
//

str = "Hello, World!";
console.log(str.charAt(7)); // W

// Question : Prompt the user to enter their full name. Generate a username for the user based on their input. Start username with @ , follwed by their full name and ending with the full name length
// Example : abhasjaiswal => @abhasjaiswal12
//

let fullName = prompt("Enter your full name: ");
let userName = "@" + fullName + fullName.length;
console.log(userName.trim());
