import React from 'react';

export default function Budget({ budget }) {
	const { category, frequency, amount } = budget;
	return (
		<section className='flex flex-col w-1/4'>
			<h3 className='w-full flex justify-center'>{category}</h3>
			<h3 className='w-full flex justify-start'>{frequency}</h3>
			<h3 className='w-full h-1/2 flex justify-center'>{amount}</h3>
		</section>
	);
}
