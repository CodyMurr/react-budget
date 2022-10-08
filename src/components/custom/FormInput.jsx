import React from 'react';

export default function FormInput({
	styling,
	title,
	type,
	formData,
	handleChange,
	isRequired,
}) {
	return (
		<label className='flex flex-col text-xl w-full my-3'>
			{title}:
			<input
				className={styling}
				type={type}
				name={title.toLowerCase()}
				value={formData[title.toLowerCase()]}
				onChange={handleChange}
				autoComplete='off'
				required={isRequired}
			/>
		</label>
	);
}

FormInput.defaultProps = {
	type: 'text',
	styling: 'input input-primary rounded-md w-full',
	isRequired: true,
};
