import express from 'express';
const app = express();

// To parse JSON bodies for POST/PUT requests
app.use(express.json());


function authUser(req, resp, next){
    // For GET requests, we check query parameters (e.g., /protection?user=bat)
    // For POST requests, we could check req.body.user
    const user = req.query.user || (req.body && req.body.user);

    if(user === 'bat'){
        console.log("user can leave from class");
        next();
    }
    else{
        console.log("can't leave!!!!");
        resp.status(403).send("can't leave!!")
    }
}

app.get('/user' , (req, resp) =>{
    resp.send("this is great")
})

app.get('/home' , (req, resp) => {
    resp.send(`<h1> man this sucks </h1>`)
})

app.get('/protection', authUser ,(req,resp) =>{
    resp.send("welcome to the club!!!")
})


app.listen(4800)


// ! solve || fix!!e