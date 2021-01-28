import React, {useEffect, useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ModalMenu from './ModalMenu';
import ModalInput from './ModalInput';

const ModalPage = ({users, title, comment, onChange, onSend, onRemove}) => {
	const [open, setOpen] = useState(false);
	const [openSecond, setOpenSecond] = useState(false);

	// const [inputs, setInputs] = useState({
	// 	title:'',
	// 	comment:''
	// });

	// const {title, comment} = inputs;

	// const [users, setUsers] = useState([]);

	const onOpenModal = () => setOpen(true);
	const onOpenSecondModal = () => setOpenSecond(true);
	const onCloseModal = () => setOpen(false);
	const onCloseSecondModal = () => setOpenSecond(false);

	// const onChange = (e) => {
  //   const {name, value} = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   });
	// };
	
  // const onSend = () => {
  //   const user = {
	// 		id: users.length+1,
	// 		title,
	// 		comment
  //   };
  //   setUsers([...users, user]);

  //   setInputs({
	// 		title:'',
	// 		comment:''
  //   });
  //   users.length += 1;
	// }
	
	// const onRemove = (id) => {
	// 	setUsers(users.filter(user => user.id !== id))
	// }

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
				<ModalInput users={users} title={title} comment={comment} onChange={onChange} onSend={onSend} onRemove={onRemove} />
			</Modal>
		</div>
	);
};

export default ModalPage;