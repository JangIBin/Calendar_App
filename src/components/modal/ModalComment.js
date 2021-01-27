import React from 'react';

function ModalComment({user, onRemove}) {
	return (
		<div className="ModalComment">
			<b>{user.title}</b>
			<p>{user.comment}</p>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	)
}

export default ModalComment;