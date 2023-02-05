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
        // appending li to ul
        userList.appendChild(li)

        // emptying the inputs
        nameInput.value = ''
        emailInput.value = ''
        phoneInput.value = '' 
}
}
