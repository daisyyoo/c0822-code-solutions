const dataObject = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (let i = 1; i < dataObject.nextId; i++) {
    fs.readFile('./data.json', 'utf8', () => {
      console.log(`${i}: ${dataObject.notes[i]}`);
    });
  }
}
