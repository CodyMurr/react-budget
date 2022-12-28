import React from 'react';

export default function Transaction({ transaction }) {
	return (
		<div className='w-full border-2 flex flex-col'>
			<section className='w-1/2 flex'>
				<h3 className='text-primary text-lg font-bold w-1/3 flex justify-start'>
					ID:
				</h3>
				&nbsp;
				<p className='w-1/3 flex justify-start'>{transaction._id}</p>
			</section>
			<section className='w-1/2 flex'>
				<h3 className='text-primary text-lg font-bold w-1/3 flex justify-start'>
					Type:
				</h3>
				&nbsp;
				<p className='w-1/3 flex justify-start'>{transaction.type}</p>
			</section>
			<section className='w-1/2 flex'>
				<h3 className='text-primary text-lg font-bold w-1/3 flex justify-start'>
					Amount:
				</h3>
				&nbsp;
				<p className='w-1/3 flex justify-start'>${transaction.amount}</p>
			</section>
			<section className='w-1/2 flex'>
				<h3 className='text-primary text-lg font-bold w-1/3 flex justify-start'>
					Payee:
				</h3>
				&nbsp;
				<p className='w-1/3 flex justify-start'>
					{transaction.payee
						.split(' ')
						.map((s) => s.replace(s[0], s[0].toUpperCase()))
						.join(' ')}
				</p>
			</section>
		</div>
	);
}
