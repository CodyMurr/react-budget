import React from 'react';
import Budget from './Budget';

export default function BudgetList({ budgets, categories }) {
	return (
		<section className='w-full flex flex-col justify-start'>
			{budgets.map((b, i) => (
				<Budget budget={b} categories={categories} key={b._id} />
			))}
		</section>
	);
}
