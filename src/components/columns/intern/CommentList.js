import React from 'react';

import Comment from './Comment';

function CommentList({ users }) {
  return (
    <div className="background-wrap-commentlist">
      {users.map(user => (
        <Comment user={user} key={user.id} />
      ))}
    </div>
  ) 
}

export default CommentList;