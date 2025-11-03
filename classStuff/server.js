// import http from 'http'
import express  from 'express';

// const server = http.createServer((req, resp) =>{
//     resp.write(200, {'content-type' : 'text/plain'})
//     resp.send("hello welcome to server!!!")
// })

// server.listen(4800, ()=> {
//     console.log('this is running at port 4800')
// })

const app = express();
app.get('/ghost', (req, resp) => {
    console.log('url' , req.url)
console.log("method" , req.method)

resp.send(JSON.stringify({
    msg : "req successfull recieved",
    url : req.url
}))



    // resp.send('this is vb')

})


app.listen(4800);