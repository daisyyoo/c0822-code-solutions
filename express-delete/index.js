const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const arrayResponse = [];
  for (const key in grades) {
    arrayResponse.push(grades[key]);
  }
  res.json(arrayResponse);
});

app.delete('/api/grades/:id', (req, res) => {
  for (const key in grades) {
    const paramNumber = Number(req.params.id);
    if (Number(key) === paramNumber) {
      delete grades[paramNumber];
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
