import React from 'react';
import BudgetForm from '../components/BudgetForm';

export default function NewBudgetPage({ budgets, categories, setBudgets }) {
	return (
		<main className='w-full flex flex-col items-center min-h-screen'>
			<h2 className='w-full bg-primary text-primary-content text-lg font-bold'>
				New Budget
			</h2>
			<BudgetForm
				budgets={budgets}
				categories={categories}
				setBudgets={setBudgets}
			/>
		</main>
	);
}
