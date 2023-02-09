const btn = document.getElementById('submit_button')
const exp_input = document.getElementById('Expense_amount_input')
const category = document.getElementById('category_selector')
const ul = document.querySelector('.list-group')
const discipt = document.getElementById('Write_Discription_input')

btn.addEventListener('click',addexpense)

function addexpense (e){
    // making an object of user inputs
    let my_obj = {exp:exp_input.value, category: category.value, discipt: discipt.value}
    // now stringifying the obj as local storage only takes strings
    let my_obj_str = JSON.stringify(my_obj)

    localStorage.setItem(`${exp_input.value}${discipt.value}`,my_obj_str)
    // making a li
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `Rs${exp_input.value} ${category.value} ${discipt.value}`
    // making an invisible element
    let inv_text = document.createElement('p');
    inv_text.textContent = `${exp_input.value}${discipt.value}`;
    inv_text.className = 'inv_text';
    inv_text.style.display  ='none';
    li.appendChild(inv_text)
    //making a delete button//
    let delButton = document.createElement('button')
    // adding class
    delButton.className = 'btn btn-danger btn-sm float-right delete'
    // adding X
    delButton.textContent = 'X'

    // appending delbutton to li
    li.appendChild(delButton)
    // making an edit button//
    let edit = document.createElement('button')
    // adding class
    edit.className = 'btn btn-warning btn-sm float-right edit mr-1'
    // adding text
    edit.textContent = 'edit';
    // appending edit to li
    li.appendChild(edit)

    // appending li to ul
    ul.appendChild(li)

    // emptying inputs
    exp_input.value = ''
    discipt.value = ''
}

//-----------modifying user details from ul and local storage-----//
ul.addEventListener('click',modify_user);

function modify_user(e){
    //-----------deleting user details from ul and local storage-----//
    if(e.target.className == 'btn btn-danger btn-sm float-right delete'){
        // deleting user details from local storage first
        let key_email = e.target.parentElement.querySelector('.inv_text').textContent
        localStorage.removeItem(key_email) 
        // deleting li containing user detail from ul
        ul.removeChild(e.target.parentElement)
    }
    //-----------editing user details from ul and deliting old user details from local storage-----//
    if (e.target.className == 'btn btn-warning btn-sm float-right edit mr-1'){
        // getting user details from local storage
        let key_email = e.target.parentElement.querySelector('.inv_text').textContent
        // geting userdata from local storage and deserializing(parsing) it
        let user_obj = JSON.parse(localStorage.getItem(key_email))
        // now filling details in inputs
        exp_input.value =  user_obj.exp
        category.value = user_obj.category
        discipt.value = user_obj.discipt
        //  Now deleting user details from local storage
        localStorage.removeItem(key_email)
        // deleting li containing user's data
        ul.removeChild(e.target.parentElement)
    }
}