console.dir(window.document);

// difference between console.log and console.dir
// console.log is used to log the output to the console
// console.dir is used to log the object

// To get the object, we can directly use
console.log(document); // as window is the global object, we can directly access the document object

// To get body element
console.log(document.body);

// To get head element
console.log(document.head);

// We csn get chld nodes of the body element

console.log(document.body.childNodes);

// To get the first child of the body element
console.log(document.body.firstChild);

// To get the last child of the body element
console.log(document.body.lastChild);

// We need this information in order to make the changes to the HTML elements using JavaScript

// Let's say we want to change the background color of the body element

document.body.style.backgroundColor = "red"; // This will change the colour of the body element to red

document.body.childNodes[3].innerText = "Hello Abhas Jaiswal";

// DOM Manpiulation techniques

let heading = document.getElementById("heading");
console.log(heading);

// Using Class Name
let heading2 = document.getElementsByClassName("Heading");
console.log(heading2);

let tag = document.getElementsByTagName("h1");
console.log(tag);
