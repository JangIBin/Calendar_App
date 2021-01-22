import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import './Modal.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap, faLaptop
} from "@fortawesome/free-solid-svg-icons";

const ModalMenu = ({onOpenSecondModal}) => {
	
	return(
		<div className="Modal">
			<div className="modal-list">
				<button className="modal-school">
					<i><FontAwesomeIcon icon={faGraduationCap} /></i>
					<span>학교</span>
				</button>
				<hr className="buttonHr" />
				<button className="modal-intern">
					<i><FontAwesomeIcon icon={faLaptop} /></i>
					<span>인턴</span>
				</button>
			</div>
			<hr />
			<div className="newButton">
				<button onClick={onOpenSecondModal}>+ New</button>
			</div>
		</div>
	);
};

export default ModalMenu;