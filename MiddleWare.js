import express from 'express'

const app = express()

const port = 4800;


// app.use(function(req, resp , next) {
//     console.log("this is middle ware that runs before any route? i might be wrong");
//     // it gets stuck on some point so use next()

//     next();
// })


// Global mid-ware!!!
function middleware = (req ,resp , next) =>{
    resp.send("nice")
    next();
} 

// console.log()
middleware();

app.listen(port)

