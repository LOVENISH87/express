import express from 'express'
const app= express();



const port= 4800;
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req, resp)=>{
    resp.send("thids is workign!!!")
})


app.get("/boy", (req, resp) => {
    const name = req.query.name || 'guest'
    resp.send(`hello from ${name}`)
})

app.get('/form', (req, resp) => {
    resp.sendFile(process.cwd() + "/form1.html")
})

app.post('/submit' , (rq, resp)=>{
    const name = rq.body.name;
    resp.send(`rec name ${name}`)
})



let user = {name : "batm" , age: 69, class : "detective"};
app.get('/user' , (req, resp) =>{
    // resp.send("this is user's info")
    resp.json(user)
})
app.put('/user' , (req,resp) =>{
    user = {...user, ...req.body}
    resp.status(504).json({message : "user updated", user})
})


app.delete('/del' , (req, resp) =>{
    let user = {};
    resp.status(100).json({message : "user data deleted!!!"})
})


app.listen(4800, () =>{
    console.log("good boy is runnig on =>",`${port}`);
})