import React from 'react';
import 'react-responsive-modal/styles.css';

import './Modal.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap, faLaptop
} from "@fortawesome/free-solid-svg-icons";

const ModalMenu = ({onOpenSecondModal, onSendSchool, onSendIntern}) => {
	
	return(
		<div className="Modal">
			<div className="modal-list">
				<button className="modal-school" onClick={onSendSchool} >
					<i><FontAwesomeIcon icon={faGraduationCap} /></i>
					<span>학교</span>
				</button>
				<hr className="buttonHr" />
				<button className="modal-intern" onClick={onSendIntern} >
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