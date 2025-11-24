// import { name } from 'ejs'
import express from 'express'

import session from 'express-session'

const app = express()
app.use(express.urlencoded({extended: false})) //rain check!!!



app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  //secure only for https!!!
    
}))


// //console.log(req.session)


app.get('/chk' , (req, resp) =>{

    resp.send(req.session)
})

app.get('/', (req, resp) => {
    resp.send(`
        <form action='/login' method='post'>
            <input type='text' name='name' />
            <input type='password' name='pass' />

            <input type='submit' value='login' />

        </form> `)
})


app.post('/login' , (req,resp) =>{
    req.session.user = {
    name : req.body.name,
    pass : req.body.pass
    }

    resp.redirect('/red')
})


app.get('/red', (req, resp)=>{
resp.send(`welcome to redirect page!!! ${req.session.user?.name}
    <a href = '/login'>logout</a>
`)

})

app.listen(4800, () => {
    console.log("this just works!!! and running on port 4800")
})

