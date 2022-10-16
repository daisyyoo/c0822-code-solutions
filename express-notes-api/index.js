const express = require('express');
const app = express();

const dataObject = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  fs.readFile('./data.json', 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      res.status(200);
      const dataArray = [];
      for (const key in dataObject.notes) {
        dataArray.push(dataObject.notes[key]);
      }
      res.send(dataArray);
    }
  });
});

app.get('/api/notes/:id', (req, res, next) => {
  const idNum = req.params.id;
  const errId = { error: '' };
  fs.readFile('./data.json', 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    for (const key in dataObject.notes) {
      const id = key;
      if (!Number(idNum) || Number(idNum) < 0) {
        res.status(400);
        errId.error = 'id must be a positive integer';
      } else if (id === idNum) {
        res.status(200);
        res.send(dataObject.notes[idNum]);
        return next();
      } else if (id !== idNum) {
        res.status(404);
        errId.error = `cannot find note with id ${idNum}`;
      }
    }
    res.send(errId);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
