const http = require('http')

const server = http.createServer((request,response)=>{
    const url = request.url
    if(url === '/'){
        response.write('<html>')
        response.write('<head><title>Enter Message</title></head>')
        response.write('<body><form action="/message" method="POST"><input type="text" name="msg"><br><button type="submit">Send</button></form></body>')
        response.write('</html>')
        return response.end()
    }
    else if(url === '/home'){
        response.write('<html>')
        response.write('<head><title>Home</title></head>')
        response.write('<body><p>Welcome Home </p></body>')
        response.write('</html>')
        return  response.end()
    }
    else if(url === '/about'){
        response.write('<html>')
        response.write('<head><title>About</title></head>')
        response.write('<body><p>Welcome to about us Page </p></body>')
        response.write('</html>')
        return  response.end()
    }
    else if (url === '/node'){
        response.write('<html>')
        response.write('<head><title>Node</title></head>')
        response.write('<body><p>Welcome to my nodeJS project </p></body>')
        response.write('</html>')
        return  response.end()
    }
    // now response
    response.setHeader('content-Type','text/html')
    response.write('<html>')
    response.write('<head><title>My First Page</title></head>')
    response.write('<body><p>Hello from my node JS server </p></body>')
    response.write('</html>')
    response.end()
})

server.listen(3000)