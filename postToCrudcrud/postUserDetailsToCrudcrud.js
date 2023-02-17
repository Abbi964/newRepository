 // making an object of user inputs
 let my_obj = {name_user:nameInput.value, email: emailInput.value, phone: phoneInput.value}
 // now storing my_obj in using crudcrud
 axios.post('https://crudcrud.com/api/6c20a90a87fa49a3bde8194354c90ac8/appointmentData',my_obj)
     .then((res)=>{
         // appending an invisible element storing _id so that i can delete user details from crudcrud
         appendInvisibleElement(res.data._id)
     })
     .catch((err)=>console.log(err))
 