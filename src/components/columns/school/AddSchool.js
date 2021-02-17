import React from 'react';

function AddComment({comment, onChange, onSendSchool}) {
	return (
		<div className="background-wrap-comment">
      <hr />
      <input name="comment" placeholder="Add a comment..." onChange={onChange} value={comment || ''} />
      <button onClick={onSendSchool}>Send</button>
      <hr />
    </div>
	)
}

export default AddComment;