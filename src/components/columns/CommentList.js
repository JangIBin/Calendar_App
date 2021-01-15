import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.comment}</b>
      <button onClick={() => onRemove(user.id)}>Del</button>
    </div>
  );
}

function CommentList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default CommentList;