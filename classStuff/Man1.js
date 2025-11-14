import express from 'express'
const app = express();



app.use(express.json());

function Userlogin(req, resp,next) {
    if(  req.body && req.body.name ==="a" && req.body.city === "b"){
        // resp.send("this is batman and city is gotham")
        next()
    }
    else{
        resp.send("batman is not herE?1")
    }
}

// app.get('/name', (req, resp)=>{
//     resp.send("this is better!!!");
// })

app.post('/bat' ,  Userlogin, (req ,resp) =>{
    resp.send("this is batman man ")
})

app.listen(3000 , () => console.log("runnnning"))