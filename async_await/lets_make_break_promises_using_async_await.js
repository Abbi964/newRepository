let posts = []
let lastUserActivity;

const createPost = async(post)=>{

    const addPost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve(`name : ${post.title}`);

        },1000)
    })

    const updateLastUserActivityTime = new Promise((resolve,reject)=>{
        lastUserActivity = new Date
        resolve(lastUserActivity)
    })

    let msg = await Promise.all([addPost,updateLastUserActivityTime])

    return msg
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

createPost({title:'name1',post:'Post1'}).then((m)=>console.log(m))
createPost({title:'name2',post:'Post2'}).then((m)=>console.log(m))
.then(printPost)
.then(deletePost)
.then(printPost)