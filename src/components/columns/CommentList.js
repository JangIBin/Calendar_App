import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.comment}</b>
    </div>
  );
}

function CommentList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default CommentList;