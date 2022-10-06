import React from 'react';

export default function FormInput({ title, type, formData, handleChange }) {
	return (
		<label className='flex flex-col w-full m-3'>
			{title}:
			<input
				className='input input-primary rounded-md'
				type={type}
				name={title.toLowerCase()}
				value={formData[title.toLowerCase()]}
				onChange={handleChange}
				autoComplete='off'
			/>
		</label>
	);
}

FormInput.defaultProps = {
	type: 'text',
};
