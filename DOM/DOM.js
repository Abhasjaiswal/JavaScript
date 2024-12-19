// DOM - Document Object Model
// DOM is a programming interface for HTML and XML documents. It represents the structure of the document as a tree of nodes.
// DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content.
// DOM is not a programming language, but without it, the JavaScript language wouldn'it have any model or notion of web pages, HTML documents, XML documents, etc.
// When a web page is loaded, the browser creates a Document Object Model of the page.
// The DOM is a fully object-oriented representation of the web page, and it can be modified with a scripting language such as JavaScript.
// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.

/* Window Object
 * The window object represents an open window in a browser.
 * If a document contain frames ( tags), the browser creates a window object for each frame.
 * The window object is the first object in the hierarchy.
 * It is a global object with lots of properties and methods.
 * It is browser's object not JavaScript object.
 */

/* We can access HTML elements using window object in JavaScript using documents*/

// DOM Manipulation
// DOM manipulation is the process of changing the document structure, style and content.
// We can use JavaScript to manipulate the DOM in real time.
//
// DOM manipulation is the key to building modern interactive web applications.
// It allows us to:
// 1. Add new content to a page, change the existing content, and remove content.
// 2. Change the style of the page, for example by changing the color, font, or size of elements.
// 3. React to user actions, for example, by displaying or hiding elements in response to a user clicking a button.
// 4. Change the structure of the page, for example, by adding, removing, or reordering elements.
// 5. Animate elements on the page, for example by moving them, changing their size, or changing their color.
//

// DOM Manipulation Methods
//
// 1. getElementById() - Returns the element that has the ID attribute with the specified value.
// 2. getElementsByClassName() - Returns a collection of all elements in the documentwith the specified class name.
// 3. getElementsByTagName() - Returns a collection of all elements in the document with the specified tag name.
// 4. querySelector() - Returns the first element that matches a specified CSS selector(s) in the document.
// 5. querySelectorAll() - Returns a static NodeList representing a list of the document's elements that match the specified group of selectors.
// 6. createElement() - Creates an Element node.
// 7. createTextNode() - Creates a Text node.
// 8. appendChild() - Adds a new child node to an element as the last child node.
// 9. removeChild() - Removes a child node from an element.
// 10. replaceChild() - Replaces a child node in an element.
// 11. insertBefore() - Inserts a new child node before a specified existing child node.
// 12. setAttribute() - Sets the value of an attribute on the specified element.
// 13. getAttribute() - Returns the value of a specified attribute on the element.

// Properties of the DOM
// tagName - Returns the tag name of the element.
// innerHTML - Returns the HTML content of the element.
// innerText - Returns the text content of the element.
// textContent - Returns the text content of the element.

// Attributes of the DOM

//getattribute() - Returns the value of a specified attribute on the element.
//setAttribute() - Sets the value of an attribute on the specified element.
//removeAttribute() - Removes a specified attribute from an element.
//hasAttribute() - Returns true if the specified attribute exists, otherwise it returns false.

// node.style - Allows you to set the style of an element using JavaScript.
//
// node.style.property = value; // property is the CSS property and value is the value of the property.
// node.style.backgroundColor = "red"; // This will change the background color of the element to red.

// Insert Element

// node.append(element) - Adds a new child node to an element as the last child node.
// node.prepend(element) - Adds a new child node to an element as the first child node.
// node.after(element) - Inserts a new node after the specified node.
// node.before(element) - Inserts a new node before the specified node.

// Remove Element
// node.remove() - Removes the element from the DOM.
//
