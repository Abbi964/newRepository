let itemList = document.querySelector('#items');

// Parent Node
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// Parent Element almost same as parent node
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// Children
console.log(itemList.children);
console.log(itemList.children[1]);

// First Child (it takes linebrakes into account to)
console.log(itemList.firstChild);
// FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Item 1st';

// Last Child (it takes linebrakes into account to)
console.log(itemList.lastChild);
// LastElementChild
console.log(itemList.LastElementChild);
itemList.lastElementChild.textContent = 'Hello last';

//next sibling (it takes linebrakes into account to)
console.log(itemList.nextSibling)
//nextElementSibling
console.log(itemList.nextElementSibling)

// Previous sibling (it takes linebrakes into account to)
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'green';

// Creating a div
let newDiv = document.createElement('div');

// adding class to div
newDiv.className = 'Hello';

// Adding ID to div
newDiv.id = 'HelloID';

//Adding Attributes
newDiv.setAttribute('title','Hello-title')

// Creating a text node for div
let newDivText = document.createTextNode('Hello World');

// Appending textnode to div
newDiv.appendChild(newDivText);

console.log(newDiv)