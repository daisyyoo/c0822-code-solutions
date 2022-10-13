const dataObject = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (let i = 1; i < dataObject.nextId; i++) {
    fs.readFile('./data.json', 'utf8', () => {
      console.log(`${i}: ${dataObject.notes[i]}`);
    });
  }
} else if (process.argv[2] === 'create') {

  console.log(process.argv[3]);
  console.log(dataObject.notes);
  console.log(dataObject.notes[dataObject.nextId]);
  // const newEntry = dataObject.notes[`${dataObject.nextId.toString()}`: ${process.argv[3]}`];
  // JSON.parse(newEntry);
  // dataObject.nextId++;
}
