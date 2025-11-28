import express from 'express';
import fs from 'fs'
const app = express();

app.use(express.json());

const likhoStreamMe = fs.createWriteStream('./data2.txt' )

app.get('/', (req, resp) => {
    const davat = fs.createReadStream('./data.txt' , 'utf-8');
    davat.on('data' , (chk) => {
        likhoStreamMe.write(chk)
        // likhoStreamMe.write(chk);
    })
    davat.on('end' , () => resp.end())
    // likhoStreamMe.write('data' , (chk) => resp.write(chk));

})

const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
  console.log(`Server started on port PORT`);
});