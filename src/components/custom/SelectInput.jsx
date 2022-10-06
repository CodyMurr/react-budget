import React from 'react';

export default function SelectInput({
	title,
	formData,
	optData,
	defaultMsg,
	handleChange,
}) {
	const options = optData.map((opt, i) => (
		<option key={`${opt.name}-${i}`} value={opt.name}>
			{opt.name}
		</option>
	));
	return (
		<label className='flex flex-col w-full m-3'>
			{title}:
			<select
				className='input input-primary rounded-md'
				name={title.toLowerCase()}
				value={formData[title.toLowerCase()]}
				onChange={handleChange}>
				<option value={null}>{defaultMsg}</option>
				{options}
			</select>
		</label>
	);
}
