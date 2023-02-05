let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit',addItem)

// Adding Item
function addItem(e){
    e.preventDefault();

    // getting inputs
    let newItem = document.getElementById('item');
    let newItem2 = document.getElementById('item_2');

    // making new li element
    let newLi = document.createElement('li');
    // stting up its class
    newLi.className = 'list-group-item';
    // adding newItem's values in newLi
    newLi.innerHTML = `${newItem.value}<br>${newItem2.value}`

    //making a delete button//
    let delButton = document.createElement('button')
    // adding class
    delButton.className = 'btn btn-danger btn-sm float-right delete'
    // adding X
    delButton.textContent = 'X'

    // appending delbutton to newLI
    newLi.appendChild(delButton)

    // making an edit button//
    let edit = document.createElement('button')
    // adding class
    edit.className = 'btn btn-warning btn-sm float-right edit mr-1'
    // adding text
    edit.textContent = 'edit';
    // appending edit to newLI
    newLi.appendChild(edit)


    // appending newLi in itemList
    itemList.appendChild(newLi)
}

// removing Item from list when delButton is clicked
// adding event listener

itemList.addEventListener('click',removeItem)

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li)
        }
    }

}


//-----------------------// emplimenting Filter//------------------------------------//
let filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems)

function filterItems(e){
    //  grabbing search_text and converting to lowercase
    let search_txt = e.target.value.toLowerCase();
    
    // grabing all li
    let listItems = document.querySelectorAll('.list-group-item');

    // looping through each li to check if search_txt exists in li
    listItems.forEach(function(l_item){
       let li_text = l_item.textContent.toLowerCase();
       // checking if finding index of searchtext in li_test gives -1 or not
       if (li_text.indexOf(search_txt) != -1){
          l_item.style.display = 'block';
       }
       else{
         l_item.style.display = 'none';
       }
    })
}


