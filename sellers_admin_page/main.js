let submitBtn = document.getElementById('submitBtn');
let sellingPrice = document.getElementById('sellingPrice');
let productName = document.getElementById('productName')
let form = document.getElementById('formId')

form.addEventListener('submit',onSubmit)

async function onSubmit(e){
    e.preventDefault()
    // making an object containing data
    let obj_data = {
        sellingPrice : sellingPrice.value ,
        productName : productName.value
    }
    // Posting data to crud crud
    let crudcrudId;  // storing crudcrud id
    await axios.post('https://crudcrud.com/api/db9f509ed0d845069f8175a65f09b2f5/products',obj_data)
        .then(res=>{
            crudcrudId = res.data._id
        })
        .catch(err=>console.log(err))
    //---showing data on DOM------//
    // making a list Item
    let li = document.createElement('li')
    li.className = "list-group-item";
    li.id = crudcrudId;
    li.textContent = `${productName.value} - Rs ${sellingPrice.value}`

    //making a delete button
    let del = document.createElement('button')
    del.className = "btn btn-danger position-absolute end-0"
    del.textContent = 'Del'
    // appending del button on li
    li.appendChild(del)
    //appending li to productList
    document.querySelector('#products').appendChild(li)

    // adding to total value
    let total = document.querySelector('#totalValue')
    total.textContent = `Total value of Products : Rs ${parseInt(total.className) + parseInt(sellingPrice.value)}`
    total.className = `${parseInt(total.className) + parseInt(sellingPrice.value)}`

    // clearing inputs
    productName.value = ''
    sellingPrice.value = ''
}

//-----removing products using del button------//
let products = document.querySelector('#products');
products.addEventListener('click',modifyData)

async function modifyData(e){
    if (e.target.className=='btn btn-danger position-absolute end-0'){
        // deleting product from DOM and crudcrud
        let li_id = e.target.parentElement.id
        
        // substracting from total value
        //first getting price of product
        let price;
        await axios.get(`https://crudcrud.com/api/db9f509ed0d845069f8175a65f09b2f5/products/${li_id}`)
            .then(res=>{
                price = res.data.sellingPrice;
            })
        // now substracting
        let total = document.querySelector('#totalValue')
        total.textContent = `Total value of Products : Rs ${parseInt(total.className) - parseInt(price)}`
        total.className = `${parseInt(total.className) - parseInt(price)}`
        
        // deleting from crudcrud
        axios.delete(`https://crudcrud.com/api/db9f509ed0d845069f8175a65f09b2f5/products/${li_id}`)
            .catch(err=>console.log(err))

        // deleting from DOM
        e.target.parentElement.remove()
        
    }
}

//---showing all products when page reloads-------//

window.addEventListener('DOMContentLoaded',loadContent);

async function loadContent(e){
    // getting data from crudcrud
    let obj_arr;
    await axios.get('https://crudcrud.com/api/db9f509ed0d845069f8175a65f09b2f5/products')
        .then(res=>{
            obj_arr = res.data
        })
    obj_arr.forEach((obj)=>{
        // adding selling price to total value
        let total = document.querySelector('#totalValue')
        total.textContent = `Total value of Products : Rs ${parseInt(total.className) + parseInt(obj.sellingPrice)}`
        total.className = `${parseInt(total.className) + parseInt(obj.sellingPrice)}`

        // adding to DOM
        // making a list Item
        let li = document.createElement('li')
        li.className = "list-group-item";
        li.id = obj._id;
        li.textContent = `${obj.productName} - Rs ${obj.sellingPrice}`

        //making a delete button
        let del = document.createElement('button')
        del.className = "btn btn-danger position-absolute end-0"
        del.textContent = 'Del'
        // appending del button on li
        li.appendChild(del)
        //appending li to productList
        document.querySelector('#products').appendChild(li)
    })
}

