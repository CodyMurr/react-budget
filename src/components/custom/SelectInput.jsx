import React from 'react';

export default function SelectInput({
	title,
	formData,
	optData,
	defaultMsg,
	handleChange,
	styling,
}) {
	const options = optData.map((opt) => (
		<option key={opt} value={opt}>
			{opt}
		</option>
	));
	return (
		<label className='flex flex-col justify-evenly h-1/4 w-full my-3 text-xl font-bold'>
			{title}:
			<select
				className={styling}
				name={title.toLowerCase()}
				value={formData[title.toLowerCase()]}
				onChange={handleChange}>
				<option value={null}>{defaultMsg}</option>
				{options}
			</select>
		</label>
	);
}

SelectInput.defaultProps = {
	styling: 'input input-primary rounded-md w-full',
};
