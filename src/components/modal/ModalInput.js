import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import './ModalInput.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

const ModalInput = () => {
	
	return(
		<div className="Modal">
			<input placeholder="Untitled" />
			<hr />
			<div className="modal-type">
				<div className="modal-type-label">
					<i><FontAwesomeIcon icon={faCaretSquareDown} /></i>
        	<span className="type">Type</span>
				</div>
        <div className="modal-type-select">
					
				</div>
      </div>
		</div>
	);
};

export default ModalInput;