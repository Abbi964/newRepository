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

let idOfUserGettingEdited = null  // this is for formSubmit to know that we are editing an existing user or making a new user



async function onSubmit (e){
    e.preventDefault()
    if (nameInput.value==='' || emailInput.value==='' || phoneInput.value===''){
        msg.classList.add('error')
        msg.innerHTML = '<p style="font-weight:bold">Please fill complete form</p>';
        setTimeout(() => msg.innerHTML = '',1000)
        setTimeout(() => msg.classList.remove('error'),1000)
        

    }
    else if(idOfUserGettingEdited){
        // we are editing user not creating a new user
        // making an object of user inputs
        let my_obj = {name_user:nameInput.value, email: emailInput.value, phone: phoneInput.value}
        // now updating user details in crudcrud
        await axios.put(`https://crudcrud.com/api/6c20a90a87fa49a3bde8194354c90ac8/appointmentData/${idOfUserGettingEdited}`, my_obj)
            .catch((err)=>console.log(err))
        // updating user details in DOM
        let liToEdit = document.getElementById(idOfUserGettingEdited)
        liToEdit.innerHTML = `<p>Name:${nameInput.value}, Email:${emailInput.value}<br> Phone:${phoneInput.value}</p>`
        //---Now adding a delete button----//
        let del_button = document.createElement('button')
        del_button.className = 'del_button';
        del_button.textContent = 'del'
        liToEdit.appendChild(del_button)

        //----Now adding an edit button----//
        let edit_button = document.createElement('button')
        edit_button.className = 'edit_button';
        edit_button.textContent = 'edit'
        liToEdit.appendChild(edit_button)

        // emptying the inputs
        nameInput.value = ''
        emailInput.value = ''
        phoneInput.value = ''
        // making idOfUserGettingEdited to null
        idOfUserGettingEdited = null
        
    }
    else{

        // making an object of user inputs
        let my_obj = {name_user:nameInput.value, email: emailInput.value, phone: phoneInput.value}
        // now storing my_obj in using crudcrud
        let crudcrudId;
        await axios.post('https://crudcrud.com/api/6c20a90a87fa49a3bde8194354c90ac8/appointmentData',my_obj)
            .then((res)=>{
                crudcrudId = res.data._id
            })
            .catch((err)=>console.log(err))
        
        // -------showing user details on screen--------//

        // making a list item
        let li = document.createElement('li')
        li.className = 'list-class';
        // adding CrudCrud ID to li
        li.id = crudcrudId;
        // adding user details to li
        li.innerHTML = `<p>Name:${nameInput.value}, Email:${emailInput.value}<br> Phone:${phoneInput.value}</p>`
        
        
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

//-----------modifying user details from ul and crudcrud-----//
userList.addEventListener('click',modify_user);

async function modify_user(e){
    //-----------deleting user details from ul and crudcrud-----//
    if(e.target.className == 'del_button'){
        // deleting user details from crudcrud first
        let li_id = e.target.parentElement.id
        axios.delete(`https://crudcrud.com/api/6c20a90a87fa49a3bde8194354c90ac8/appointmentData/${li_id}`)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
        // deleting li containing user detail from ul
        userList.removeChild(e.target.parentElement)
    }
    //-----------editing user details from ul and deliting old user details from crudcrud-----//
    if (e.target.className == 'edit_button'){
        // getting user details from crudcrud
        let li_id = e.target.parentElement.id
        // geting userdata from crudcrud
        let user_obj;
        await axios.get(`https://crudcrud.com/api/6c20a90a87fa49a3bde8194354c90ac8/appointmentData/${li_id}`)
            .then((res)=>user_obj = res.data)
            .catch((err)=>console.log(err))
        // now filling details in inputs
        nameInput.value =  user_obj.name_user
        emailInput.value = user_obj.email
        phoneInput.value = user_obj.phone
        // storing id
        idOfUserGettingEdited = li_id
        
    }
}

//-------geting user info from crudcrud after reloding page-----------//

window.addEventListener('DOMContentLoaded',loadData);

async function loadData(e){
    let obj_arr;
    await axios.get('https://crudcrud.com/api/6c20a90a87fa49a3bde8194354c90ac8/appointmentData')
        .then(res=>{
            obj_arr = res.data
        })
    obj_arr.forEach((obj)=>{
        // -------showing user details on screen--------//

        // making a list item
        let li = document.createElement('li')
        li.className = 'list-class';
        // adding CrudCrud ID to li
        li.id = obj._id;
        // adding user details to li
        li.innerHTML = `<p>Name:${obj.name_user}, Email:${obj.email}<br> Phone:${obj.phone}</p>`
        
        
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
    })
}



