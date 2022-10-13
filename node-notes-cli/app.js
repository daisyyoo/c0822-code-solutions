const dataObject = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', err => {
    for (const key in dataObject.notes) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      const fileContent = `${key}: ${dataObject.notes[key]}`;
      console.log(fileContent);
    }
  });
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
} else if (process.argv[2] === 'update') {
  const dataEntryNum = process.argv[3].toString();
  const updatedEntryContent = process.argv[4];
  dataObject.notes[dataEntryNum] = updatedEntryContent;
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'delete') {
  const deleteEntryNum = process.argv[3].toString();
  delete dataObject.notes[deleteEntryNum];
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
