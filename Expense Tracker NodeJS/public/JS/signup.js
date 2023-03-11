const form = document.querySelector('.form-class')
const nameInput = document.querySelector('#nameInput')
const emailInput = document.querySelector('#emailInput')
const passwordInput = document.querySelector('#passwordInput')
const prompt = document.querySelector('.prompt')

form.addEventListener('submit',SubmitForm);

function SubmitForm(e){
    if(nameInput.value==='' || emailInput.value==='' || passwordInput.value===''){
        e.preventDefault()
        prompt.innerHTML = '<p>Please Fill All The Fields</p>'
        setTimeout(()=>prompt.innerHTML='',1000)
    }
}