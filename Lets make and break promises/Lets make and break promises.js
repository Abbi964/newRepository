let posts = []
let lastUserActivity;

function updateLastUserActivityTime(){
    const promise2 = new Promise((resolve,reject)=>{
        lastUserActivity = new Date
        resolve(lastUserActivity)
    })
    return promise2
}

function createPost(post){
    const promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve(`post creacted`);

        },1000)
    })
    return promise1
}

function printPost() {
    posts.forEach((post) => {
        console.log(post)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                let popedEle = posts.pop()
                resolve(popedEle)
            }
            else{
                reject('Error')
            }
        },200)
        
    })
}

createPost({title:'name1',post:'Post1'})
createPost({title:'name2',post:'Post2'})
    .then(updateLastUserActivityTime)
Promise.all([createPost(),updateLastUserActivityTime()]).then((msg)=>console.log(msg))
    .then(printPost)
        .then(deletePost)
        .then((msg)=>{
            console.log(msg)
            updateLastUserActivityTime()
                .then((msg)=>{
                    console.log(msg)
                    printPost()
                })
        })


