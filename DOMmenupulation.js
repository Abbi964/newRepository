// console.log(document);
// console.dir(document);


// console.log(document.body);
// console.log(document.head);
// console.log(document.forms);
console.log(document.images);

console.log(document.title);
console.log(document.URL);
document.title = "New Title";

const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header')
// headerTitle.textContent = "Hello";
// headerTitle.innerText  ="Hello HEllo";

header.style.borderBottom = 'solid 3px #000';

const addItem = document.querySelectorAll('.title')[0]
addItem.style.fontWeight = 'bold';
addItem.style.color = 'green';