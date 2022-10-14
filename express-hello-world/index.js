const express = require('express');
const app = express();

app.use((req, res) => {
  // req.method('GET');
  res.send('Hello World!');
});

app.listen(3000, () => {
  // console.log('The server is listening');
});
