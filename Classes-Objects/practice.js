// QS1
// You are creating a website for your college. Create a class user with two properties
// name and email
// It also has a method viewData() that allows the user to view the data.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Name:", this.name, "Email:", this.email);
  }
}

let user1 = new User("Abhas Jaiswal", "abhas.jaiswal0907@gmail.com");
