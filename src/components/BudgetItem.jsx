import React from 'react';

export default function BudgetItem({ label, item }) {
	return (
		<p className='w-1/4 flex justify-start'>
			{label}: &nbsp;&nbsp;
			<span className='font-bold'>{item}</span>
		</p>
	);
}
