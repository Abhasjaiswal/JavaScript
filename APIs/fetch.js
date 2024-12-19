// fetch API is used to make AJAX requests to the server

// It uses requests and responses to send and receive data from the server
// It is a modern way to fetch data from the server
// It is a promise-based API
// It is a part of the window object

// Syntax
// fetch(url, options)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));
// url - The URL of the server
// options - An object that contains the request method, headers, body, etc.
// response - The response from the server
// data - The data received from the server
// error - The error message if the request fails

// let response = fetch([url], [options]);

// AJAX - Asynchronous JavaScript and XML
// JSON - JavaScript Object Notation
// json() - A method that converts the response to JSON format

const URL = "https://cat-fact.herokuapp.com/facts";

const getCatFacts = async () => {
  console.log("Fetching cat facts...");
  let response = await fetch(URL);
  console.log("Response:", response);
  let data = await response.json();
  console.log(data);
  console.log("Cat facts fetched successfully!");
};

getCatFacts();
