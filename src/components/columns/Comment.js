import React, { useState } from 'react';

import {firestore} from "../../firebase/firebase";

function Comment({ user }) {

	const [state, setState] = useState({name:user.comment})
	const [show, setShow] = useState(false);

	const { name } = state;

	const toggleShow = () => setShow(!show);

	const update = () => {
    firestore.collection("intern").doc(user.id).set(
      {
        comment:name
      },
      {
        merge: true
      }
		);
		setShow(false);
  }

	const handleChange = (e) => {
    setState({
      ...state,
      name: e.target.value
    });
	};
	
  if (show) {
    return (
      <div className="commentlist-comment">
      	<input type="text" value={name} onChange={ handleChange }/>
				<button onClick={update}>DB저장</button>
    	</div>
    );
  } else {
    return (
			<div className="commentlist-comment">
				<b>{name}</b>
				<button onClick={(e) => firestore.collection("intern").doc(user.id).delete()}>삭제</button>
				<button onClick={() => toggleShow()}>수정</button>
		</div>
    );
  }
}

export default Comment;