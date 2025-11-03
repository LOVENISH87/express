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
app.get('/', (req, resp) => {
    // console.log('url' , req.url)
// console.log("method" , req.method)
resp.send()

  

// if(req.url == '/'){
//     resp.write(200, {'content-type' : "text/plain"})
//     respsend("this is root root")
// }

// else if(req.url === "/home"){
//     resp.send("this is home")
// }

// else if(req.url === "/play"){
//     resp.send("this is home")
// }

// else if(req.url === "/goat"){
//     resp.send("this is home")
// }

// else{
//     resp.send("match, not found")
// }



const query = url.parse(req.url, true).query
 const name = query.name || 'test'


 resp.write(200, {'content-type' : 'text/plain'})
 resp.send(`hello ${name}`)





resp.send(JSON.stringify({
    msg : "req successfull recieved",
    url : req.url
}))





    // resp.send('this is vb')

})


app.listen(4800);