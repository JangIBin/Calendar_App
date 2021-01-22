import React, {useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ModalMenu from './ModalMenu';
import ModalInput from './ModalInput';

const ModalPage = () => {
	const [open, setOpen] = useState(false);
	const [openSecond, setOpenSecond] = useState(false);

	const [inputs, setInputs] = useState({
		title:'',
		constant:''
	});

	const onOpenModal = () => setOpen(true);
	const onOpenSecondModal = () => setOpenSecond(true);
	const onCloseModal = () => setOpen(false);

	return(
		<div className="ModalPage">
			<button onClick={onOpenModal}>+</button>
			<Modal open={open} onClose={onCloseModal} center>
				<ModalMenu onOpenSecondModal={onOpenSecondModal}/>
			</Modal>
			<Modal open={openSecond} onClose={() => setOpenSecond(false)}>
				<ModalInput />
			</Modal>
		</div>
	);
};

export default ModalPage;