import React from 'react';
import { FaPen } from 'react-icons/fa';

export default function EditBtn({ toggleEditMode }) {
	return (
		<p
			className='absolute right-0 bottom-0 w-1/3 h-1/2 flex justify-center items-center text-accent-content cursor-pointer'
			onClick={toggleEditMode}>
			<FaPen size={15} />
			&nbsp;&nbsp;
			<span>Edit</span>
		</p>
	);
}
