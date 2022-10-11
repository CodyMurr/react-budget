import React from 'react';

export default function SelectInput({
	title,
	formData,
	optData,
	defaultMsg,
	handleChange,
	styling,
}) {
	const options = optData.map((opt, i) => (
		<option key={`${opt.name}-${i}`} value={opt.name}>
			{opt.name}
		</option>
	));
	return (
		<label className='flex flex-col w-full my-3 font-bold'>
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
