import React, { useState } from 'react';

function Comment({ user, onRemove, onUpdate }) {

	const [state, setState] = useState({name:user.comment})
	const [show, setShow] = useState(false);

	const { name } = state;

	const toggleShow = () => setShow(!show);

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
				<button onClick={() => toggleShow()}>저장</button>
    	</div>
    );
  } else {
    return (
			<div className="commentlist-comment">
				<b>{name}</b>
				<button onClick={() => onRemove(user.id)}>삭제</button>
				<button onClick={() => toggleShow()}>수정</button>
		</div>
    );
  }
}

export default Comment;