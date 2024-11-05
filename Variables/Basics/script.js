const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};

// In this example pressing the button runs some code. First, it changes the text on the button itself. Second, it shows a message of the number of times the button has been pressed. The number is stored in a variable. Each time the user presses the button, the number in the variable will increment by one.
