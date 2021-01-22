import React from 'react';

import Comment from './Comment';

function CommentList({ users, onRemove, onUpdate }) {
  return (
    <div className="background-wrap-commentlist">
      {users.map(user => (
        <Comment user={user} key={user} onRemove={onRemove} onUpdate={onUpdate} />
      ))}
    </div>
  ) 
}

export default CommentList;