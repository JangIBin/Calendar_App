import React from 'react';

import Comment from './Comment';

function CommentList({ users, onRemove, onUpdate }) {
  return (
    <div>
      {users.map(user => (
        <Comment user={user} key={user.id} onRemove={onRemove} onUpdate={onUpdate} />
      ))}
    </div>
  ) 
}

export default CommentList;