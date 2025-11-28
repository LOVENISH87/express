import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { EventEmitter } from 'events';

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3000 }
}));




app.get('/login', (req, res) => {
    req.session.user = 'Guest';
    res.cookie('status', 'active');
    userMonitor.emit('userLogin', req.sessionID);
    res.send('session started for guest. Cookie [status] set to active.');
});


app.listen(4800, () => {
    console.log(`Server started on port 4800` );
});


class UserMonitor extends EventEmitter {}

const userMonitor = new UserMonitor();

userMonitor.on('userLogin', (sessionID) => {
    console.log(`user logged in. session ID: ${sessionID}`);
});
