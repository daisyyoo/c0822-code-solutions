const express = require('express');
const app = express();
const path = require('path');

const joinedPath = path.join(__dirname, 'public');
const staticPath = express.static(joinedPath);
app.use(staticPath);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
