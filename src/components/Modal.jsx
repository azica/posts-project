import React, {useRef} from 'react';
import closeIcon from '../images/white-close-icon.svg'
import useClickOutside from '../hooks/useClickOutside';


const Modal = ({setShowModal, showModal, children}) => {
	const ref = useRef()
	const handleCloseModal = () => {
		setShowModal(!showModal);
	  };
	  useClickOutside(ref, setShowModal)
	return (
		<div className={`modal ${showModal ? "active": ""}`}>
			<div className="modal__body" ref={ref}>
			<img src={closeIcon} alt="" onClick={handleCloseModal} className="modal__close-btn"/>
				{children}
			</div>
		</div>
	);
}

export default Modal;
