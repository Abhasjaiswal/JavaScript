// Events in js
// 1. Mouse Events
// 2. Keyboard Events
// 3. Form Events

// We can access HTML elements using window object in JavaScript using documents

// node.event = function(){}; // This is the syntax to add an event listener to an element.

// Event object
// The event object is the object that is passed to the event handler when an event occurs.
//
// The event object contains information about the event, such as the type of event, the target element, and the key that was pressed.
//
// The event object is automatically passed to the event handler as the first argument.
//
// The event object is the same for all event types, but the properties of the event object are different depending on the type of event.
//
// The event object has a lot of properties and methods that we can use to get information about the event.
//
// Some of the most commonly used properties of the event object are:
// 1. type - Returns the type of the event.
// 2. target - Returns the element that triggered the event.
// 3. ClientX - Returns the horizontal coordinate of the mouse pointer when the event occurred.
// 4. ClientY - Returns the vertical coordinate of the mouse pointer when the event occurred.

// node.event(e) => {
//  // code}
//  // e is the event object that is passed to the event handler.
//  // We can use this object to get information about the event.
//  // For example, we can use e.target to get the element that triggered the event.

// Event Listeners
// Event listeners are used to listen for events on an element.

// node.addEventListener(event, callback); // This is the syntax to add an event listener to an element.
// node.removeEventListener(event, callback); // This is the syntax to remove an event listener from an element.

// Event Listeners can do multiple things on a single event
// node.addEventListener(event, function1);
// node.addEventListener(event, function2);

// We can also pass event objects inside event listeners
// node.addEventListener(event, function(e)); // e is the event object that is passedto the event handler.
// We can use this object to get information about the event.

// We can also remove event listeners

// node.removeEventListener(event, function); // This is the syntax to remove an event listener from an element.
