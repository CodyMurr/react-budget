import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function ModalButton({ name, handleClick }) {
	return (
		<label
			className='modal-button w-2/5 flex justify-start items-center m-8 text-primary cursor-pointer text-2xl hover:underline'
			onClick={handleClick}>
			<FaPlus size={25} />
			&nbsp; &nbsp;
			<p>New {name}</p>
		</label>
	);
}
