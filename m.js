import express from 'express'
import data from './data.json'

const app = express()


// const fs = require('fs');
const req = app.get('http://nonexistent-site.com', (res) => {});
req.on('error', (err) => {
  console.error(err.code); // 'ECONNREFUSED' or 'ENOTFOUND'
});