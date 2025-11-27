import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

// Read a file example
app.get('/read', (req, res) => {
  const data = fs.readFileSync('data.txt', 'utf-8');
  res.send(data);
});

// Write a file example
app.post('/write', (req, res) => {
  const { content } = req.body;
  fs.writeFileSync('data.txt', content);
  res.send('File updated');
});

const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
  console.log(`Server started with FS on port PORT`);
});