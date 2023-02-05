const btn = document.querySelector('.btn');

btn.addEventListener('click', (a) => {
    btn.value = 'Submitted';
    setTimeout(()=> btn.value ='Submit', 1000)

})

const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone')
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()
    if (nameInput.value==='' || emailInput.value==='' || phoneInput.value===''){
        msg.classList.add('error')
        msg.innerHTML = '<p style="font-weight:bold">Please fill complete form</p>';
        setTimeout(() => msg.innerHTML = '',1000)
        setTimeout(() => msg.classList.remove('error'),1000)
        

    }
    else{

        // making an object of user inputs
        let my_obj = {name_user:nameInput.value, email: emailInput.value, phone: phoneInput.value}
        // now stringifying the obj as local storage only takes strings
        let my_obj_str = JSON.stringify(my_obj)

        localStorage.setItem(emailInput.value,my_obj_str)
        
        // -------showing user details on screen--------//
        // making a list item
        let li = document.createElement('li')
        li.className = 'list-class';
        // adding user details
        li.innerHTML = `<p>Name:${nameInput.value}, Email:${emailInput.value}<br> Phone:${phoneInput.value}</p>`
        // appending an invisible element storing email so that i can delete user details from local storage
        let inv_text = document.createElement('p');
        inv_text.textContent = emailInput.value;
        inv_text.className = 'inv_text';
        inv_text.style.display  ='none';
        li.appendChild(inv_text)
        //---Now adding a delete button----//
        let del_button = document.createElement('button')
        del_button.className = 'del_button';
        del_button.textContent = 'del'
        li.appendChild(del_button)

        //----Now adding an edit button----//
        let edit_button = document.createElement('button')
        edit_button.className = 'edit_button';
        edit_button.textContent = 'edit'
        li.appendChild(edit_button)

        // appending li to ul
        userList.appendChild(li)

        // emptying the inputs
        nameInput.value = ''
        emailInput.value = ''
        phoneInput.value = '' 


}
}

//-----------modifying user details from ul and local storage-----//
userList.addEventListener('click',modify_user);

function modify_user(e){
    //-----------deleting user details from ul and local storage-----//
    if(e.target.className == 'del_button'){
        // deleting user details from local storage first
        let key_email = e.target.parentElement.querySelector('.inv_text').textContent
        localStorage.removeItem(key_email) 
        // deleting li containing user detail from ul
        userList.removeChild(e.target.parentElement)
    }
    //-----------editing user details from ul and deliting old user details from local storage-----//
    if (e.target.className == 'edit_button'){
        // getting user details from local storage
        let key_email = e.target.parentElement.querySelector('.inv_text').textContent
        // geting userdata from local storage and deserializing(parsing) it
        let user_obj = JSON.parse(localStorage.getItem(key_email))
        // now filling details in inputs
        nameInput.value =  user_obj.name_user
        emailInput.value = user_obj.email
        phoneInput.value = user_obj.phone
        //  Now deleting user details from local storage
        localStorage.removeItem(key_email)
        // deleting li containing user's data
        userList.removeChild(e.target.parentElement)
    }
}
