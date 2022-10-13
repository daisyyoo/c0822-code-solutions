const dataObject = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (let i = 1; i < dataObject.nextId; i++) {
    fs.readFile('./data.json', 'utf8', () => {
      const fileContent = `${i}: ${dataObject.notes[i]}`;
      console.log(fileContent);
    });
  }
} else if (process.argv[2] === 'create') {
  const newEntryNum = dataObject.nextId.toString();
  const newEntryContent = process.argv[3];
  dataObject.notes[newEntryNum] = newEntryContent;
  dataObject.nextId++;
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
