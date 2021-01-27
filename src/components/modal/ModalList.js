import React from 'react';

import ModalComment from './ModalComment';

function ModalList({users, onRemove}) {
  return (
		<div className="ModalList">
			{users.map(user => (
				<ModalComment key={user.id} user={user} onRemove={onRemove} />
			))}
		</div>
  ) 
}

export default ModalList;