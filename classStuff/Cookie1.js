import cookieParser from "cookie-parser";
import express from "express";

const app = express();
app.use(cookieParser())


app.get('/' , (req, resp) =>{
    resp.send("nice try diddy");
} )

app.get('/set' , (req, resp) =>{
    resp.cookie('user' , 'bat' , {maxAge: 1500});
    resp.send('this is working flaw - less ');
})

app.get('/get' , (Req, resp) => {
    resp.send(`cookie value  , ${req,cookies.user}`);


})

app.delete('/delete' , (req, resp) =>{
    // resp.clearCookie(`req.cookie.user, ${user}`)
    // resp.clearCookie(req.cookies.user)
    resp.clearCookie('user')
    resp.send('cookie cleared!!!')
})


app.listen(4800);