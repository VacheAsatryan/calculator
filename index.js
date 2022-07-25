/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('express');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.get('/test', (req, res) => {
  const value = fs.readFileSync('testFile.txt');
  res.send(JSON.parse(value));
});
app.post('/test', (req, res) => {
  try {
    fs.writeFileSync('testFile.txt', JSON.stringify(req.body));
    console.log('File created successfully!');
    res.sendStatus(201);
  } catch (error) {
    res.send({ massage: 'cant read file' }).status(500);
    console.log('Failed to create file!', error);
  }
});

app.listen(3001, async () => {
  await mongoose.connect('mongodb://localhost:27017/test');
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'create2' });
  silence.save();
  console.log('Application listening on port 3001!');
});
