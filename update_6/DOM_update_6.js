let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit',addItem)

// Adding Item
function addItem(e){
    e.preventDefault();

    // getting input
    let newItem = document.getElementById('item');

    // making new li element
    let newLi = document.createElement('li');
    // stting up its class
    newLi.className = 'list-group-item';
    // adding newItem's value in newLi
    newLi.textContent = newItem.value

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


