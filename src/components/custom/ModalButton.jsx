import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function ModalButton({ name, handleClick }) {
	return (
		<label
			className='modal-button flex w-44 justify-between items-center p-2 rounded text-xl text-primary cursor-pointer hover:text-primary-content hover:bg-primary'
			onClick={handleClick}>
			<FaPlus size={20} />
			<p>New {name}</p>
		</label>
	);
}
