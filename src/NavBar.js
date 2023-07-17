// Navbar.js (updated)
import React from 'react';

const Navbar = ({ brandName, onGetUsersClick }) => {
  return (
    <nav className="navbar">
      <h1>{brandName}</h1>
      <button className="get-users-btn" onClick={onGetUsersClick}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
