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
			className={`flex flex-col justify-center text-xl my-3 font-bold h-28 ${labelStyle}`}>
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
	labelStyle: 'w-3/4',
	inputStyle: 'w-full h-1/2',
	isRequired: true,
	isDisabled: false,
	handleChange: () => null,
};
