const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  const data = process.argv[i];
  fs.writeFile('note.txt', `${data} \n`, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
  );
}
