const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
  "name",
  "course",
  "score",
  "createdAt"
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const newPostObj = req.body;
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = Number(req.body.score);
  if (!('name' in newPostObj) || !('course' in newPostObj) || !('score' in newPostObj)) {
    res.status(400).json({ error: '"name", "content" and "score" are required' });
    return;
  } else if (!Number.isInteger(newScore) || newScore <= -1) {
    res.status(400).json({ error: '"score" must be a positive integer.' });
    return;
  } else if (newScore < 0 || newScore > 100) {
    res.status(400).json({ error: '"score" must be in an integer between 0 to 100' });
    return;
  }
  const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
      `;
  const params = [newName, newCourse, newScore];
  db.query(sql, params)
    .then(result => {
      const newPost = result.rows[0];
      res.status(201).json(newPost);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
