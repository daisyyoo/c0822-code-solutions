var library = [
  {
    isbn: '978-0060817091',
    title: "Marley & Me: Life and Love with the World's Worst Dog",
    author: 'John Grogan'
  },
  {
    isbn: '978-1505313109',
    title: 'White Fang',
    author: 'Jack London'
  },
  {
    isbn: '978-0440412670',
    title: 'Where the Red Fern Grows',
    author: 'Wilson Rawls'
  }
];
console.log('library array: ', library);
console.log('type of library:', typeof library);

console.log('stringify array: ', JSON.stringify(library));
console.log('type of stringify: ', typeof JSON.stringify(library));

var studentString = '{"id": "10027", "name": "daisy"}';

console.log('studentString: ', studentString);
console.log('typeof studentString: ', typeof studentString);
console.log('JSON parsed: ', JSON.parse(studentString));
console.log('typeof JSON parse: ', typeof JSON.parse(studentString));
