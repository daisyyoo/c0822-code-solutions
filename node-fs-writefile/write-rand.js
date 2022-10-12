const fs = require('fs');

const data = Math.random().toString();
fs.writeFile('random.txt', data, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
}
);
