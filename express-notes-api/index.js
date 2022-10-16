const express = require('express');
const app = express();

const dataObject = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  fs.readFile('./data.json', 'utf8', err => {
    if (err) {
      res.status(400);
      res.send('This was a bad request');
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

app.get('/api/notes/:id', (req, res) => {
  fs.readFile('.data.json', 'utf8', err => {
    if (err) {
      res.status(400);
      res.send('This was a bad request');
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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
