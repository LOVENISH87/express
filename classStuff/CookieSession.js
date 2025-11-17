import express from 'express'

const app = express();

app.get('/', (req, resp) =>{
    resp.send("hey there")
})

app.listen(4800)