
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
        try{
            // making an obj containing inputs
            let obj = {id:idOfUserGettingEdited, name:nameInput.value, email:emailInput.value, phone:phoneInput.value}
            // modifying user details in backend
            axios.put('http://localhost:3000/modifyUser',obj)
            // modifying li in DOM
            let li = document.getElementById(idOfUserGettingEdited);
            li.innerHTML = `<p>Name:${nameInput.value}, Email:${emailInput.value}<br> Phone:${phoneInput.value}</p>`
            // adding a delete button
            const delButton = makeDelButton();
            li.appendChild(delButton);
            // adding edit button
            const editButton = makeEditButton();
            li.appendChild(editButton);
            // emptying the inputs
            nameInput.value = ''
            emailInput.value = ''
            phoneInput.value = ''

            idOfUserGettingEdited = null;
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        try{
            // making an obj containing inputs
            let obj = {name:nameInput.value,email:emailInput.value,phone:phoneInput.value}
            // posting it in server saving id 
            let userId;
            await axios.post('http://localhost:3000/',obj)
                .then(res=>{
                    userId = res.data;
                })
            // creating a new list item
            const li = createLi(userId,nameInput.value,emailInput.value,phoneInput.value)
            // adding a delete button
            const delButton = makeDelButton();
            li.appendChild(delButton);
            // adding edit button
            const editButton = makeEditButton();
            li.appendChild(editButton);

            // appending li to ul
            userList.appendChild(li)

            // emptying the inputs
            nameInput.value = ''
            emailInput.value = ''
            phoneInput.value = ''
            
        }
        catch (err){
            console.log(err);
        }
    }
}

userList.addEventListener('click',modifyUser);

async function modifyUser(e){
    // if delete button is clicked
    if(e.target.className==='del_button'){
        try{
            let li_id = e.target.parentElement.id;
            axios.delete(`http://localhost:3000/delete/${li_id}`)
                .then(msg=>console.log(msg.data))
            // deleting li from ul
            userList.removeChild(e.target.parentElement)
        }
        catch(err){
            console.log(err)
        }
    }
    else if(e.target.className==='edit_button'){
        try{
            // getting user details from backend
            let li_id = e.target.parentElement.id;
            let user = await axios.get(`http://localhost:3000/edit/${li_id}`)
            
            // filling inputs with user info
            nameInput.value = user.data.name;
            emailInput.value = user.data.email;
            phoneInput.value = user.data.phone_no;

            idOfUserGettingEdited = user.data.id;
        }
        catch(err){
            console.log(err)
        }    
    }
}

//-----getting user info after reloading page------//

window.addEventListener('DOMContentLoaded',loadUserList);

async function loadUserList(){
    try{
        let response = await axios.get('http://localhost:3000/userlist')
        response.data.forEach((user)=>{
            // showing user details on screen
            // 1st making an li element with user details
            let li = createLi(user.id, user.name, user.email, user.phone_no)
            // adding a del button
            let delBtn = makeDelButton();
            li.appendChild(delBtn);
            //adding a edit button
            let editBtn = makeEditButton();
            li.appendChild(editBtn);
            // appending li to userlist
            userList.appendChild(li);
        })
    }
    catch(err){
        console.log(err)
    }   
}



function createLi(id,name,email,phone){
    let li = document.createElement('li');
    // setting class name
    li.className = 'list-class';
    // setting id
    li.id = id
    // srtting inner HTML
    li.innerHTML = `<p>Name:${name}, Email:${email}<br> Phone:${phone}</p>`
    return li
}

function makeDelButton(){
    let del_button = document.createElement('button')
    del_button.className = 'del_button';
    del_button.textContent = 'del';
    return del_button
}

function makeEditButton(){
    let edit_button = document.createElement('button')
    edit_button.className = 'edit_button';
    edit_button.textContent = 'edit'
    return edit_button
}



