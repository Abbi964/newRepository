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