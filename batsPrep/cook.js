import express from 'express';
import { session } from 'express-session';
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.use(sission({
    key: "bms",
    resave : false,
    cookie: {maxage: 24}
}))

app.get('/' , (req, resp) => {
    resp.sendFile(__dirname+'/login.html')

})

app.get('/dash' , (REq , rsp) =>{
    const {name, pass} = req.body;
    if(name === 'bittu' && pass === 'james')
        req.session.user = 'bittu sir'
    rsp.send("not working!!! man pleaselgin first?")
})

app.get('/login' , (req, resp) =>{
    if(!req.session.user) resp.send('loin')
        else{resp.send("well well")}
})

app.get('/dest' , (REq, resp) =>{
    req.session.destroy
})

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
  console.log(`Server started on port PORT`);
});