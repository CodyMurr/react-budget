import React from 'react';

export default function ExitButton({ handleClick }) {
	return (
		<label
			className='btn btn-sm btn-circle absolute right-2 top-2'
			onClick={handleClick}>
			✕
		</label>
	);
}
