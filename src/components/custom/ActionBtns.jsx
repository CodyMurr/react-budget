import React from 'react';

export default function ActionBtns(props) {
	return (
		<>
			<section className='flex items-center justify-start w-3/4'>
				<button
					className='btn btn-accent rounded text-accent-content w-1/3 font-bold text-lg mr-5'
					type='submit'>
					Save
				</button>

				<button
					className='btn btn-ghost rounded text-error w-1/4 font-bold text-lg'
					onClick={props.handleCancel}>
					Cancel
				</button>
			</section>
		</>
	);
}
