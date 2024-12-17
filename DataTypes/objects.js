const student = {
  name: "Abhas Jaiswal",
  age: 21,
  isAdult: true,
  subjects: ["Maths", "Science", "English"],
};

console.log(student);

// Objecs in JavaScript are key-value pairs. The key is always a string, and the value can be any data type.
// The key-value pair is separated by a colon, and each pair is separated by a comma.
// The object is enclosed in curly braces.
// The object can have any number of key-value pairs. The key and value are separated by a colon.
// The key-value pairs are separated by a comma.
//
// Methods to access the object properties:
// 1. Dot notation: objectName.propertyName
// 2. Bracket notation: objectName["propertyName"]
//
//
console.log(student.name);
console.log(student["name"]);

// Assigning new values to keys of an object

student["name"] = student["name"] = "Aman Jaiswal";
console.log(student.name);

student.name = "Abhay Jaiswal";
console.log(student.name);
