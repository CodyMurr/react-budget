import { useState } from 'react';
import ActionBtns from './custom/ActionBtns';
import FormInput from './custom/FormInput';

export default function TransactionForm({
	budget,
	newTransaction,
	routeChange,
}) {
	const [formData, setFormData] = useState({
		category: budget.category,
		amount: '',
		payee: '',
	});

	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await newTransaction(budget._id, formData);
			routeChange('/budgets');
			console.log(budget.transactions);
		} catch (err) {
			console.log(err);
		}
	}

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<>
			<form
				className='relative flex flex-col w-full h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<FormInput
					title='Amount'
					type='number'
					formData={formData}
					handleChange={handleChange}
				/>
				<FormInput
					title='Payee'
					formData={formData}
					handleChange={handleChange}
				/>

				<ActionBtns handleCancel={() => routeChange('/budgets')} />
			</form>
			<p className='text-error'>{error}</p>
		</>
	);
}
