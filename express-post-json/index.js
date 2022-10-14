const express = require('express');
const app = express();

let nextId = 1;
let grades = {};
const arrayResponse = [];

app.get('/api/grades', (req, res) => {
  res.json(arrayResponse);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  // grades[nextId] = Number(nextId);
  grades = req.body;
  grades.id = nextId;
  arrayResponse.push(grades);
  nextId++;
  res.json(grades);
  res.status(201).send();

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
