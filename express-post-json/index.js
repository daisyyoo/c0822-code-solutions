const express = require('express');
const app = express();

let nextId = 1;
let grades = {};

app.get('/api/grades', (req, res) => {
  const arrayResponse = [];
  arrayResponse.push(grades);
  res.json(arrayResponse);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades = req.body;
  grades.id = nextId;
  nextId++;
  res.status(201);
  res.json(grades);
  res.send();

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
