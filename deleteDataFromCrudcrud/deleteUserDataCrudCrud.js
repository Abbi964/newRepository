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
}