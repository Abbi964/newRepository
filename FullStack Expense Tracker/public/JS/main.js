
const form = document.getElementById('form_container')
const exp_input = document.getElementById('Expense_amount_input')
const category = document.getElementById('category_selector')
const ul = document.querySelector('.list-group')
const discipt = document.getElementById('Write_Discription_input')
const errorPromt = document.getElementById('prompt')

let idOfExpenseGettingEdited = null;

form.addEventListener('submit',addexpense)

async function addexpense(e){
    e.preventDefault();
    //if form is not filled
    if(exp_input.value==='' || category.value==='' || discipt.value===''){
        errorPromt.innerHTML  = '<p>Please fill complete info</p>';
        setTimeout(()=>errorPromt.innerHTML='',1000);
    }
    else if(idOfExpenseGettingEdited){
        try{
            // making a user from input values
            let obj = {id:idOfExpenseGettingEdited,amount:exp_input.value, category:category.value, discription: discipt.value};
            // modifying value in database
            axios.put('http://localhost:3000/modifyExpense',obj);
            // modifying in DOM
            let li = document.getElementById(idOfExpenseGettingEdited);
            li.innerHTML = `<p>Rs${exp_input.value} -- Category: ${category.value}, Description: ${discipt.value}</p>`
            // adding a delete button
            const delButton = makeDelButton();
            li.appendChild(delButton);
            // adding edit button
            const editButton = makeEditButton();
            li.appendChild(editButton);
            // emptying the inputs
            exp_input.value = ''
            category.value = ''
            discipt.value = ''

            idOfExpenseGettingEdited = null;
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        try{
            let obj = {amount:exp_input.value, category:category.value, discription: discipt.value};
            // posting value to backend
            let expenseId;
            await axios.post('http://localhost:3000/add_expense',obj)
                .then(res=>{
                    expenseId = res.data;
                })
            // creating a new li element
            let li = createLi(expenseId,exp_input.value,category.value,discipt.value)
            // adding a delete button
            const delButton = makeDelButton();
            li.appendChild(delButton);
            // adding edit button
            const editButton = makeEditButton();
            li.appendChild(editButton);

            // appending li to ul
            ul.appendChild(li)

            // emptying the inputs
            exp_input.value = ''
            category.value = ''
            discipt.value = ''
            
        }
        catch(err){
            console.log(err)
        }
        
    }
}

ul.addEventListener('click',modifyExpense);

async function modifyExpense(e){
    // for deleting expense
    if(e.target.className=='btn btn-danger float-end'){
        try{
            // deleting expense from database
            let li_id = e.target.parentElement.id;
            await axios.delete(`http://localhost:3000/delete/${li_id}`)
            // removing from DOM
            ul.removeChild(e.target.parentElement)
        }
        catch(err){
            console.log(err)
        }   
    }
    // for editing expense
    if(e.target.className=='btn btn-warning float-end'){
        try{
            // getting expense details from database
            let li_id = e.target.parentElement.id;
            let expense = await axios.get(`http://localhost:3000/edit/${li_id}`)

            // filling inputs
            exp_input.value = expense.data.amount;
            category.value = expense.data.category;
            discipt.value = expense.data.discription;

            idOfExpenseGettingEdited = li_id
        }
        catch(err){
            console.log(err)
        }
    }
}

//----reloading all expense when page is reloaded----//

window.addEventListener('DOMContentLoaded',reloadExpenses);

async function reloadExpenses(){
    try{
        // getting expense list from database
        let expenseList = await axios.get('http://localhost:3000/expenseList')
        expenseList.data.forEach((expense)=>{
            //showing data on DOM
            // first making a li
            let li = createLi(expense.id,expense.amount,expense.category,expense.discription);
            // adding a del button
            let delBtn = makeDelButton();
            li.appendChild(delBtn);
            //adding a edit button
            let editBtn = makeEditButton();
            li.appendChild(editBtn);
            // appending li to userlist
            ul.appendChild(li);
        })
    }
    catch(err){
        console.log(err)
    }
}

//-------util funcs------//
function createLi(id,amount,category,description){
    let li = document.createElement('li');
    // setting class name
    li.className = 'list-group-item';
    // setting id
    li.id = id
    // srtting inner HTML
    li.innerHTML = `<p>Rs${amount} -- Category: ${category}, Description: ${description}</p>`
    return li
}

function makeDelButton(){
    let del_button = document.createElement('button')
    del_button.className = 'btn btn-danger float-end';
    del_button.textContent = 'del';
    return del_button
}

function makeEditButton(){
    let edit_button = document.createElement('button')
    edit_button.className = 'btn btn-warning float-end';
    edit_button.textContent = 'edit'
    return edit_button
}