// // import express from 'express';
// import fs from 'fs'
// // const app = express();
// import { dirname } from 'path';

// // app.use(express.json());
// const readData = fs.createReadStream(__dirname + '/data.txt' , 'utf-8');
// const writeData = fs.createWriteStream(__dirname + '/data2.txt')


// readData.pipe(writeData)



// // app.get('/', (req, res) => {
// //   res.send('Server is running...');
// // });

// // const PORT = process.env.PORT || 4800;
// // app.listen(PORT, () => {
// //   console.log(`Server started on port PORT`);
// // });

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readData = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
const writeData = fs.createWriteStream(__dirname + '/data2.txt');

readData.pipe(writeData);

readData.on('end', () => {
  console.log("Piping completed.");
});
