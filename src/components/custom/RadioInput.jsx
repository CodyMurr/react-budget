import React from 'react';

export default function RadioInput({ title, name, handleChange }) {
	return (
		<label
			htmlFor={title.toLowerCase()}
			className='w-1/4 flex justify-evenly items-center font-bold'>
			<input
				className='radio radio-primary'
				type='radio'
				name={name}
				id={title.toLowerCase()}
				value={title.toLowerCase()}
				onChange={handleChange}
			/>
			{title}
		</label>
	);
}
