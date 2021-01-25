import React, {useEffect, useState, useRef} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ModalMenu from './ModalMenu';
import ModalInput from './ModalInput';

const ModalPage = () => {
	const [open, setOpen] = useState(false);
	const [openSecond, setOpenSecond] = useState(false);

	const [inputs, setInputs] = useState({
		title:'',
		modalComment:''
	});

	const {title, modalComment} = inputs;

	const [users, setUsers] = useState([]);

	const onOpenModal = () => setOpen(true);
	const onOpenSecondModal = () => setOpenSecond(true);
	const onCloseModal = () => setOpen(false);
	const onCloseSecondModal = () => setOpenSecond(false);

	const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
	};
	
	const nextId = useRef(1);
  const onSend = () => {
    const user = {
			id: nextId.current,
			test,
			modalComment
    };
    setUsers([...users, user]);

    setInputs({
			test:'',
			modalComment:''
    });
    nextId.current += 1;
  }

	useEffect(()=>{
		if(openSecond===true && open === true){
			setOpen(false);
		}
	})

	return(
		<div className="ModalPage">
			<button onClick={onOpenModal}>+</button>
			<Modal open={open} onClose={onCloseModal} center>
				<ModalMenu onOpenSecondModal={onOpenSecondModal}/>
			</Modal>
			<Modal open={openSecond} onClose={onCloseSecondModal} center>
				<ModalInput title={title} modalComment={modalComment} onChange={onChange} onSend={onSend} />
			</Modal>
		</div>
	);
};

export default ModalPage;