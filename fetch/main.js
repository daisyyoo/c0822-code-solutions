async function asyncTesting() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    const message = (`An error has occurred: ${response.status}`);
    throw new Error(message);
  }
  const data = await response.json();
  return console.log('1', data);
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(err => console.error('fetch failed!', err));
}
asyncTesting().catch(err => {
  console.log('2', err.message);
});
