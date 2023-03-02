import React, { useState, useEffect } from 'react';
import UserList from './user-list';

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* your code here */
    async function testing() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        const message = (`An error has occurred: ${response.status}`);
        throw new Error(message);
      }
      const users = await response.json();
      setUsers(users);
      setIsLoading(false);
    }
    testing().catch(err => err.message('Something went wrong!'));
  });

  return isLoading
    ? <p>Loading...</p>
    : <UserList users={users} />;
}

export default App;
