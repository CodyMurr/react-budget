import React from 'react';

export default function RadioInput({ title, name, handleChange }) {
	return (
		<label
			htmlFor={title.toLowerCase()}
			className='w-1/3 flex justify-between items-center font-bold'>
			<input
				className='radio radio-primary m-2'
				type='radio'
				name={name}
				id={title.toLowerCase()}
				value={title}
				onChange={handleChange}
			/>
			{title}
		</label>
	);
}
