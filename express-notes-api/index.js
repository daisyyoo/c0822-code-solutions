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
      } else if (id !== idNum) {
        res.status(404);
        errId.error = `cannot find note with id ${idNum}`;
      } else if (id === idNum) {
        res.status(200);
        res.send(dataObject.notes[idNum]);
        return next();
      }
    }
    res.send(errId);
  });
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  const newContent = req.body;
  const errId = { error: '' };
  const newNote = {
    id: dataObject.nextId,
    content: newContent.content
  };
  const id = dataObject.nextId;
  for (const key in newContent) {
    if (key !== 'content') {
      res.status(400);
      errId.error = 'content is a required field';
      res.send(errId);
    } else if (key === 'content') {
      dataObject.notes[dataObject.nextId] = newNote;
      dataObject.nextId++;
    }
  }
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      res.status(500);
      errId.error = 'An unexpected error occurred.';
      res.send(errId);
      console.error(err);
      process.exit(1);
    }
    res.status(201).json(dataObject.notes[id]);
  });
});

app.delete('/api/notes/:id', (req, res, next) => {
  const idNum = req.params.id;
  // const errId = { error: '' };
  for (const key in dataObject.notes) {
    // const id = key;
    if (!Number(idNum) || Number(idNum) < 0) {
      res.status(400).json({ error: ' id must be a positive integer' });
      // errId.error = 'id must be a positive integer';
    } else if (key !== idNum) {
      res.status(404).json({ error: `cannot find note with id ${idNum}` });
      // errId.error = `cannot find note with id ${idNum}`;
    } else if (key === idNum) {
      res.status(204);
      delete dataObject.notes[idNum];
      res.send(dataObject.notes[idNum]);
      return next();
    }
  }
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
      // errId.error = 'An unexpected error occurred.';
      // res.send(errId);
      process.exit(1);
    }
    res.send();
  });
});

app.put('/api/notes/:id', (req, res, next) => {
  const idNum = req.params.id;
  const newContent = req.body;
  const errId = { error: '' };
  for (const key in dataObject.notes) {
    for (const property in newContent) {
      const id = key;
      if (!Number(idNum) || Number(idNum) < 0) {
        res.status(400);
        errId.error = 'id must be a positive integer';
      } else if (property !== 'content') {
        res.status(400);
        errId.error = 'content is a required field';
      } else if (id !== idNum) {
        res.status(404);
        errId.error = `cannot find note with id ${idNum}`;
      } else if (id === idNum && property === 'content') {
        res.status(200);
        dataObject.notes[id] = newContent;
        dataObject.notes[id].id = Number(id);
        res.json(dataObject.notes[id]);
        res.send();
        return next();
      }
    }
  }
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      res.status(500);
      errId.error = 'An unexpected error occurred.';
      res.send(errId);
      console.error(err);
      process.exit(1);
    }
    res.send(errId);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
