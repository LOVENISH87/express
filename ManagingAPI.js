console.log("starting the rest api thing")


import express from 'express'
// import data from {'./data.json' : 'utf-8'}
import users from './data.json' assert {type : 'json'}
import fs from 'fs'

const app = express()


app.get('/', (req,resp) =>{
    resp.send("this is bs man!!!");
})
app.get('/form' , (Req,resp) =>{
    resp.sendFile(process.cmd() + '/form.html')
})

app.post('/submit' , (req, resp)=> {
    const name = req.body.name
    resp.send(`form is recieved from ${name}`)
})

app.listen(4800 , () =>{
    console.log("server is running on port -> 4800")
})

