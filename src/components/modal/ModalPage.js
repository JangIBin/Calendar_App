import React, {useEffect, useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ModalMenu from './ModalMenu';
import ModalInput from './ModalInput';

const ModalPage = ({users, title, comment, onChange, onSend, onRemove, onSendSchool, onSendIntern, add}) => {
	const [open, setOpen] = useState(false);
	const [openSecond, setOpenSecond] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onOpenSecondModal = () => setOpenSecond(true);
	const onCloseModal = () => setOpen(false);
	const onCloseSecondModal = () => setOpenSecond(false);

	useEffect(()=>{
		if(openSecond===true && open === true){
			setOpen(false);
		}
	},[open, openSecond])

	return(
		<div className="ModalPage">
			<button onClick={onOpenModal}>+</button>
			<Modal open={open} onClose={onCloseModal} center>
				<ModalMenu onOpenSecondModal={onOpenSecondModal} onSendSchool={onSendSchool} onSendIntern={onSendIntern} />
			</Modal>
			<Modal open={openSecond} onClose={onCloseSecondModal} center>
				<ModalInput users={users} title={title} comment={comment} onChange={onChange} onSend={onSend} onRemove={onRemove} add={add} />
			</Modal>
		</div>
	);
};

export default ModalPage;