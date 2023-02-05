const btn = document.querySelector('.btn');


btn.addEventListener('click', (a) => {
    btn.value = 'Submitted';
    setTimeout(()=> btn.value ='Submit', 1000)

})

btn.addEventListener('mouseover', (a) => {
    btn.style.background = 'black';
    

})

btn.addEventListener('mouseout', (a) => {
    btn.style.background = '#333';

})

const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()

    if (nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error')
        msg.innerHTML = '<p style="font-weight:bold">Please fill complete form</p>';
        setTimeout(() => msg.innerHTML = '',1000)
        setTimeout(() => msg.classList.remove('error'),1000)
        

    }
    else{
        // making an object of user inputs
        let my_obj = {'name':nameInput.value, 'email': emailInput.value}
        // now stringifying the obj as local storage only takes strings
        let my_obj_str = JSON.stringify(my_obj)

        localStorage.setItem('obj',my_obj_str)
        nameInput.value = ''
        emailInput.value = ''
    }
}





