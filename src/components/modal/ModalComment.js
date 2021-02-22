import React from 'react';

import './ModalComment.css';

import {firestore} from "../../firebase/firebase"; 

function ModalComment({user}) {
	return (
		<div className="ModalComment">
			<div className="modalWrap">
				<div className="modalText">
					<b><span>Title: </span>{user.title}</b>
					<p><span>Comment: </span> {user.comment}</p>
				</div>
				<button onClick={(e) => firestore.collection("calendar").doc(user.id).delete()}>삭제</button>
			</div>
			<hr />
		</div>
	)
}

export default ModalComment;