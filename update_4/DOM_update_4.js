const header = document.querySelector('#main-header')

header.style.borderBottom = ' solid 4px black';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');

submit.value = 'SEND';

// querySelector will selects the 1st element
let item = document.querySelector('.list-group-item');
item.style.color = "red";

let items = document.querySelectorAll('.list-group-item')

let item_4 = items[3]
item_4.style.color = 'blue'

let item_3 = document.querySelector('.list-group-item:nth-child(3)');
item_3.style.color = "coral";

let title = document.querySelectorAll('.title')

title[0].textContent = 'Hello';

// makign odd list item's background grey
let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// making 2nd item's back color green
let even = document.querySelectorAll('li:nth-child(even)');

even[0].style.backgroundColor = 'green';

// making 3rd item invisible
odd[1].style.display = 'none';

// changing font of second item in list to green
let list_item = document.querySelectorAll('.list-group-item');

list_item[1].style.color = 'green';

// making background green of all odd list elements
for (let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}