/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('express');
const { resourceLimits } = require('worker_threads');
const { mySaveNum } = require('./mongose');
const router = express.Router();
// const value = fs.readFileSync('testFile.txt');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.././public')));
app.use('/', router);
app.get('/test', (req, res) => {
  res.send(JSON.parse(value));
});
app.post('/test', async (req, res) => {
  try {
    try {
      await mySaveNum.deleteMany();
      console.log('All Data successfully deleted');
    } catch (err) {
      console.log(err);
    }
    // fs.writeFileSync('testFile.txt', JSON.stringify(req.body));
    // eslint-disable-next-line new-cap
    const result = new mySaveNum({ ...req.body, createDatatime: Date.now() });

    const test = await result.save();
    console.log('File created successfully!');
    res.sendStatus(201);
  } catch (error) {
    res.send({ massage: 'cant read file' }).status(500);
    console.log('Failed to create file!', error);
  }
});
router.route('/test').get((req, res) => {
  mySaveNum.findOne({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
    .sort({ createDatatime: -1 });
});

app.listen(3002, async () => {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log('Application listening on port 3002!');
});
