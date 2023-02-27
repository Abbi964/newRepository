const http = require('http')

const server = http.createServer((request,response)=>{
    console.log("My name is Abhinav Thapliyal")
})

server.listen(4000)