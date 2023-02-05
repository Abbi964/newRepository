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
        li.textContent = `Name:${nameInput.value}, Email:${emailInput.value} Phone:${phoneInput.value}`
        // appending an invisible element storing email so that i can delete user details from local storage
        let inv_text = document.createElement('p');
        inv_text.textContent = emailInput.value;
        inv_text.style.display  ='none';
        li.appendChild(inv_text)
        // Now adding a delete button
        let del_button = document.createElement('button')
        del_button.className = 'del_button';
        del_button.textContent = 'del'
        li.appendChild(del_button)
        // appending li to ul
        userList.appendChild(li)

        // emptying the inputs
        nameInput.value = ''
        emailInput.value = ''
        phoneInput.value = '' 
}
}

//-----------deleting user details from ul and local storage-----//
userList.addEventListener('click',del_user);

function del_user(e){
    if(e.target.className == 'del_button'){
        // deleting user details from local storage first
        let key_email = e.target.parentElement.firstElementChild.textContent
        localStorage.removeItem(key_email) 
        // deleting li containing user detail from ul
        userList.removeChild(e.target.parentElement)
    }
}
