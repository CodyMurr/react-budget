import React from 'react';

export default function RadioInput({ title, name, formData, handleChange }) {
	return (
		<label
			htmlFor={title.toLowerCase()}
			className='w-1/4 flex justify-around items-center font-bold'>
			<input
				className='radio radio-primary'
				type='radio'
				name={name}
				id={title.toLowerCase()}
				value={formData[name]}
				onChange={handleChange}
			/>
			{title}
		</label>
	);
}
