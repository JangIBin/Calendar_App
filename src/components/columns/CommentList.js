import React from 'react';

import Comment from './Comment';

function CommentList({ users, onUpdate, update }) {
  return (
    <div className="background-wrap-commentlist">
      {users.map(user => (
        <Comment user={user} key={user.id} onUpdate={onUpdate} update={update} />
      ))}
    </div>
  ) 
}

export default CommentList;