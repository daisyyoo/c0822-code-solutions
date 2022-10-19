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
    res.status(400).json({ error: '"name", "course" and "score" are required' });
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

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const newPostObj = req.body;
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = Number(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer.' });
    return;
  } else if (!('name' in newPostObj) || !('course' in newPostObj) || !('score' in newPostObj)) {
    res.status(400).json({ error: '"name", "course" and "score" are required' });
    return;
  } else if (newScore < 0 || newScore > 100) {
    res.status(400).json({ error: '"score" must be in an integer between 0 to 100' });
    return;
  }
  const sql = `
     update "grades"
        set "name" = $2,
            "course" = $3,
            "score" = $4
  where "gradeId" = $1
  returning *;
  `;
  const params = [gradeId, newName, newCourse, newScore];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer.' });
    return;
  }
  const sql = `
  delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.status(204).json(grade);
      }
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
