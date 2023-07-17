// UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <p>GitHub URL: {user.html_url}</p>
    </div>
  );
};

export default UserCard;
