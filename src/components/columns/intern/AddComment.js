import React from 'react';

function AddComment({comment, onChange, onSend}) {
	return (
		<div className="background-wrap-comment">
      <hr />
      <input name="comment" placeholder="Add a comment..." onChange={onChange} value={comment} />
      <button onClick={onSend}>Send</button>
      <hr />
    </div>
	)
}

export default AddComment;