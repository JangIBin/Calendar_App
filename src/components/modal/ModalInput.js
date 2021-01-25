import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';

import './ModalInput.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

const ModalInput = ({title, modalComment, onChange, onSend}) => {
	
	return(
		<div className="Modal">
			<input name="title" placeholder="Untitled" onChange={onChange} value={title} />
			<hr />
			<div className="modal-type">
				<div className="modal-type-label">
					<i><FontAwesomeIcon icon={faCaretSquareDown} /></i>
        	<span className="type">Type</span>
				</div>
        <div className="modal-type-select">
					<select className="selectModal">
						<option value="Weekday">Weekday</option>
						<option value="Holiday">Holiday</option>
					</select>
				</div>
      </div>
			<hr />
			<div className="commentModal">
				<input name="modalComment" placeholder="Add a comment..." onChange={onChange} value={modalComment} />
			</div>
			<div className="modifyButtonModal">
				<button onClick={onSend}>수정</button>
			</div>
		</div>
	);
};

export default ModalInput;