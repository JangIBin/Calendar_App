import React, { useState, useCallback } from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.comment}</b>
      <button onClick={() => onRemove(user.id)}>Del</button>
    </div>
  );
}

function UserModify({ user }) {
  const [state, setState] = useState({name: user.comment});
  
  const handleChange = useCallback((e) => {
    setState({
      ...state,
      name:e.target.value
    });
  },[]);

  const { name } = state;

  return (
    <div>
      <input type="text" value={name} onChange={ handleChange }/>
      <button>Save</button>
    </div>
  );
}

function CommentList({ users, onRemove }) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  if (show) {
    return (
      <div>
        <button onClick={toggleShow}>Modify</button>
        {users.map(user => (
          <User user={user} key={user.id} onRemove={onRemove} />
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={toggleShow}>Modify</button>
        {users.map(user => (
          <UserModify user={user} key={user.id} />
        ))}
      </div>
    )
  }
}

export default CommentList;