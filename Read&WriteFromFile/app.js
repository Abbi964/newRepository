// Here a form is made which submits a messege we store in message.txt and 
// redirets again to main ('/') and display that message by reading from message.txt
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method
    if (url === '/'){
        // reading msg from messsage.txt and showing on DOM with a form
        fs.readFile('message.txt','utf-8',(err,data)=>{
            res.write('<html>')
            res.write('<head><title>Enter Message</title></head>')
            res.write('<body>')
            res.write(`<p>${data}</p>`)
            res.write('<form action="/message"  method="POST"><input type="text" name="msg" ><br><button type="submit">Send</   button></form>')
            res.write('</body>')
            res.write('</html>')
            return res.end()
        })
        
    }
    else if(url === '/message' && method === 'POST'){
        // pushing all data chunks into body array
        const body = []
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        // when datastream finished writing data in message.txt
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                // redirecting to main ('/')
                res.statusCode = 302;
                res.setHeader('location','/')
                return res.end();  
            })
        })
    }
})

server.listen(3000)