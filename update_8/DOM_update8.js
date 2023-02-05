const btn = document.querySelector('.btn');


btn.addEventListener('click', (a) => {
    // a.preventDefault();
    btn.value = 'Submitted';
    setTimeout(()=> btn.value ='Submit', 1000)

})

btn.addEventListener('mouseover', (a) => {
    // a.preventDefault();
    btn.style.background = 'black';
    

})

btn.addEventListener('mouseout', (a) => {
    // a.preventDefault();
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
        localStorage.setItem('Name',`${nameInput.value}`)
        localStorage.setItem('Email',`${emailInput.value}`)
        nameInput.value = ''
        emailInput.value = ''
    }
}
