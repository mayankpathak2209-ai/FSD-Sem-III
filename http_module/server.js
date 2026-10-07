import http from 'http'

//to handle the request and send the response 
const server = http.createServer((req,res)=>{
    // res.statusCode = 200
    // res.setHeader('content-Type','text/plain')
    // res.setHeader('content-Type','application/json') //FOR JSON
    // res.setHeader('content-Type','application/html') //FOR HTML
    res.writeHead(200, {
        "content-Type" : "text/plain"
    })
    res.end("Welcome Home")
})

// to listen to the server
server.listen(3000,()=>{
    console.log("Server is running......")
})