import React, {useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalPage = () => {
	const [open, setOpen] = useState(false);
	const [inputs, setInputs] = useState({
		title:'',
		constant:''
	});

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	

	return(
		<div className="ModalPage">
			<button onClick={onOpenModal}>Open Modal</button>
			<Modal open={open} onClose={onCloseModal} center>
				<h2>Hello! Modal</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
				</p>
			</Modal>
		</div>
	);
};

export default ModalPage;