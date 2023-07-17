// App.js
import React, { useState } from 'react';
import Navbar from './NavBar';
import UserGrid from './UserGrid';

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    console.log('Before');
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };

  return (
    <div className='App'>
      <Navbar brandName="GitHub Users" onGetUsersClick={loadUsers} />
      <h2>Users:</h2>
      <UserGrid users={users} />
    </div>
  )
}

export default App;
