import React from 'react';

import SchoolComment from './SchoolComment';

function CommentList({ users }) {
  return (
    <div className="background-wrap-commentlist">
      {users.map(user => (
        <SchoolComment user={user} key={user.id} />
      ))}
    </div>
  ) 
}

export default CommentList;