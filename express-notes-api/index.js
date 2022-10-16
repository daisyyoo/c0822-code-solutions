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

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  const errId = { error: '' };
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500);
      errId.error = 'An unexpected error occurred.';
      res.send(errId);
      process.exit(1);
    }
    const newContent = req.body;
    for (const key in newContent) {
      if (key !== 'content') {
        res.status(400);
        errId.error = 'content is a required field';
        res.send(errId);
      } else if (key === 'content') {
        const id = dataObject.nextId;
        dataObject.notes[id] = newContent;
        dataObject.notes[id].id = id;
        dataObject.nextId++;
        res.status(201);
        res.json(dataObject.notes[id]);
        res.send();
      }
    }
  });
});

app.delete('/api/notes/:id', (req, res, next) => {
  const idNum = req.params.id;
  const errId = { error: '' };
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500);
      errId.error = 'An unexpected error occurred.';
      res.send(errId);
      process.exit(1);
    }
    for (const key in dataObject.notes) {
      const id = key;
      if (!Number(idNum) || Number(idNum) < 0) {
        res.status(400);
        errId.error = 'id must be a positive integer';
      } else if (id === idNum) {
        res.status(204);
        delete dataObject.notes[idNum];
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
