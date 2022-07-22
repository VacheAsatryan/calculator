/* eslint-disable import/newline-after-import */
const express = require('express');
const cors = require('cors');
// const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

const path = require('path');
const app = express();

// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const { json } = require('express');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.get('/test', (req, res, next) => {
  const value = fs.readFileSync('testFile.txt');
  res.send(JSON.parse(value));
});
app.post('/test', (req, res) => {
  try {
    fs.writeFileSync('testFile.txt', JSON.stringify(req.body));
    console.log('File created successfully!');
    res.sendStatus(201);
  // eslint-disable-next-line no-empty
  } catch (error) {
    console.log('Failed to create file!', error);
  }
});

app.listen(3001, () => {
  console.log('Application listening on port 3001!');
});
