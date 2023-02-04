const items = document.getElementsByClassName('list-group-item');

console.log(items)
items[1].style.backgroundColor = 'yellow';
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = "bold";

// now making background color of all li grey
for(let i=0 ; i<items.length ; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

items[2].style.backgroundColor = 'green';

for (let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}