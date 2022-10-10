import React from 'react';

export default function DisabledInput({ styling, type, title, formData }) {
	return (
		<label className='flex flex-col text-xl w-full my-3 font-bold'>
			{title}:
			<input
				className={styling}
				type={type}
				name={title.toLowerCase()}
				value={formData[title.toLowerCase()]}
				autoComplete='off'
				disabled={true}
			/>
		</label>
	);
}

DisabledInput.defaultProps = {
	type: 'text',
	styling: 'input input-ghost rounded-md w-full',
};
