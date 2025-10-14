// const express = require('express');

// import express from 'express'

import  express  from 'express';
import {fileURLToPath}  from 'url';
import path from 'path';
import { mainModule } from 'process';



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/' , (req, resp) => {

     resp.sendFile(path.join(__dirname, "public", 'index.html'));
})

app.listen(4900,  () => {
    console.log("runnng on port => 4900")
})




// function cook(dish){
//     console.log(`this is bs man ${dish}`)
//     return `${dish} is readyy`
// }




// function user(call , back){
//     console.log("reading data!!!!")
//     // call()
// }

// user(2)


// function sendNds(mail , Notification){
//     console.log("this message is to notify user")
//     setTimeout(() => {
//         // prin()
//     }, 2000);
// }


// // sendNds('' , " ")

// const prin =         sendNds("diddy@ph.com", "penho leak hoo gye tere nds")
// f


















function food(lunch, missed) {

    console.log("htis si back to back call back!!!")
    console.log("missed my lunch this noon")

    setTimeout(() => {
        console.log(`${lunch}`)
        missed()
    }, 3000);
    
}

food("goof", "goon")