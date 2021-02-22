import React from 'react';

import ModalComment from './ModalComment';

function ModalList({users}) {
  return (
		<div className="ModalList">
			{users.map(user => (
				<ModalComment key={user.id} user={user} />
			))}
		</div>
  ) 
}

export default ModalList;