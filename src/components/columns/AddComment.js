import React from 'react';

function AddComment({comment, onChange, onSend, add}) {
	return (
		<div className="background-wrap-comment">
      <hr />
      <input name="comment" placeholder="Add a comment..." onChange={onChange} value={comment} />
      <button onClick={onSend}>Send</button>
      <button onClick={add}>add</button>
      <hr />
    </div>
	)
}

export default AddComment;