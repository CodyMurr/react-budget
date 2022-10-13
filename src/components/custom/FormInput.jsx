import React from 'react';

export default function FormInput({
	labelStyle,
	inputStyle,
	title,
	type,
	formData,
	handleChange,
	isRequired,
	isDisabled,
}) {
	return (
		<label
			className={`flex flex-col justify-evenly text-xl my-3 font-bold ${labelStyle}`}>
			{title}:
			<input
				className={`input input-primary rounded-md ${inputStyle}`}
				type={type}
				name={title.toLowerCase()}
				value={formData[title.toLowerCase()]}
				onChange={handleChange}
				autoComplete='off'
				required={isRequired}
				disabled={isDisabled}
			/>
		</label>
	);
}

FormInput.defaultProps = {
	type: 'text',
	labelStyle: 'h-1/4 w-full',
	inputStyle: 'w-full',
	isRequired: true,
	isDisabled: false,
};
