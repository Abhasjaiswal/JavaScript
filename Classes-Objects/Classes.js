// Class in JavaScript

// Classes can be defined as a blueprint for creating objects. They are a template for creating objects. They encapsulate data for the object and the methods that can be used to manipulate that data. Classes in JavaScript are defined using the class keyword.

// DIRECT METHOD TO CREATE A CLASS

const student = {
  Name: "Abhas Jaiswal",
  Age: 21,
  RollNo: 1234,
  Marks: 100,
  // Method to display the student details
  displaydata: function () {
    console.log("marks=", this.Marks);
  },
};

student.displaydata();

// this keyword is used to refer to the current object. It is used to access the properties and methods of the current object.

// Whenever we create a js object , be default prototype object is created for that object. We can add properties and methods to the prototype object.

let arr = ["apple", "banana", "mango"];

arr.push["orange"];
// we didn't define any push method in the array object, but we can still use it. This is because the push method is defined in the prototype object of the array object.

// USING CLASS KEYWORD

// syntax
// class ClassName {
//  constructor() {
//  // code
//  }
//  method1() {
//  // code
//  }
//  method2() {
//  // code
//  }
//  ...
//  ...
//  methodN() {
//  // code
//
//  }

class Student {
  constructor(name, age, rollno, marks) {
    this.Name = name;
    this.Age = age;
    this.RollNo = rollno;
    this.Marks = marks;
  }
  displaydata() {
    console.log(
      "Name=",
      this.Name,
      "Age=",
      this.Age,
      "RollNo=",
      this.RollNo,
      "Marks=",
      this.Marks,
    );
  }
}

let student1 = new Student("Abhas Jaiswal", 21, 1234, 100);
student1.displaydata();

// Inheritance in JavaScript

// Inheritance is the process of creating a new class by using the properties and methods of an existing class. The new class is called the child class or subclass
// and the existing class is called the parent class or superclass.

// Inheritance in JavaScript is implemented using the extends keyword.
// Inheritance allows us to reuse the properties and methods of an existing class in a new class.
//
// Syntax
// class ChildClass extends ParentClass {
// constructor() {
// super();
// }
// method1() {
// // code
// }
// method2() {
// // code
// }
// ...
// ...
// methodN() {
// // code
// }

class Person {
  constructor(name, age) {
    this.Name = name;
    this.Age = age;
  }
  display() {
    console.log("Name=", this.Name, "Age=", this.Age);
  }
}

class Student1 extends Person {
  constructor(name, age, rollno, marks) {
    super(name, age);
    this.RollNo = rollno;
    this.Marks = marks;
  }
  displaydata() {
    console.log(
      "Name=",
      this.Name,
      "Age=",
      this.Age,
      "RollNo=",
      this.RollNo,
      "Marks=",
      this.Marks,
    );
  }
}

let student2 = new Student1("Abhas Jaiswal", 21, 1234, 100);
student2.displaydata();
