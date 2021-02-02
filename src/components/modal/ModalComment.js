import React from 'react';

import './ModalComment.css';

function ModalComment({user, onRemove}) {
	return (
		<div className="ModalComment">
			<div className="modalWrap">
				<div className="modalText">
					<b><span>Title: </span>{user.title}</b>
					<p><span>Comment: </span> {user.comment}</p>
				</div>
				<button onClick={() => onRemove(user.id)}>삭제</button>
			</div>
			<hr />
		</div>
	)
}

export default ModalComment;