const li = document.getElementsByTagName('li')

console.log(li)
li[1].style.backgroundColor = 'yellow';
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = "bold";

// now making background color of all li grey
for(let i=0 ; i<li.length ; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

let item_5 = li[4]

item_5.style.backgroundColor = 'green';