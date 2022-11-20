import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function ModalButton({ name, handleClick, style }) {
	return (
		<label
			className={`modal-button w-1/6 border-2 flex justify-center items-center text-primary cursor-pointer text-lg hover:underline ${style}`}
			onClick={handleClick}>
			<FaPlus size={20} />
			&nbsp; &nbsp;
			<p>{name}</p>
		</label>
	);
}
