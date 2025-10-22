// import express from 'express'
// import data from './data.json'

// const app = express()

// // const data= './data.json'
// app.get("/data", (rq, resp) => {
    
//     // resp.end(`<h2> this is main hero</h2>`)
//     return resp.json(data)
// })

// app.listen(4800)

// import express from 'express'
// // import data from './data.json'  // imported JSON as JS object
// import data from './data.json' assert { type: "json" };


// const app = express()

// app.get('/data', (req, resp) => {
//   return resp.json(data)  // sends actual JSON content
// })

// app.listen(4800, () => {
//   console.log('Server running on port 4800')
// })
import express from 'express'
import fs from 'fs'
import cors from 'cors';
const app = express()

// read JSON manually
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

const corsOptions = {
  origin: "http://localhost:5173", // or "http://localhost:3000" if using CRA
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // if you ever send cookies
}; 
// app.use(cors())
app.use(cors(corsOptions));


app.get("/" , (req, resp) => {
    const info = `<ul>  
       ${data.map(i => `<li> ${i.name} </li>`).join('  ')}
    </ul>`

    resp.send(info)
    
})

// app.get("/", (req, resp) => {
//   const info = `
//     <ul>  
//       ${data.map(i => `<li>${i.name}</li>`).join('')}
//     </ul>
//   `
//   resp.send(info)
// })


app.get('/api/data/:id', (req, resp) => {
    const id = Number(req.params.id)
    const users = data.find((some) =>some.id === id)

    return resp.json(users)
  // res.json(data)
})


app.post('/api/data', (req,resp) => {
  return resp.json({status: "pending"})
})

app.patch('/api/data/:id', (req,resp) => {
  return resp.json({status : "noting till now!!!"})
})

// app.delete('/api/')

app.listen(4800, () => {
  console.log('Server running on 4800')
})
