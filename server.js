const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.post('/submit', (req, res) => {
  // Handle the input from the web page here
  const inputData = req.body.input;
  res.send(`Received input: ${inputData}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
