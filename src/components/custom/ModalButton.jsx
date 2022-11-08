import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function ModalButton({ name, handleClick }) {
	return (
		<label
			className='modal-button flex w-1/3 justify-center items-center text-primary cursor-pointer hover:underline'
			onClick={handleClick}>
			<FaPlus size={15} />
			&nbsp; &nbsp;
			<p>{name}</p>
		</label>
	);
}
