import { create } from '../utilities/budgets-api';
import { useState } from 'react';

export default function BudgetForm({ user, categories, budgets, setBudgets }) {
	const [formData, setFormData] = useState({
		category: '',
		frequency: '',
		amount: '',
	});

	const [error, setError] = useState('');

	const catOpts = categories.map((cat) => (
		<option key={cat.name} value={cat.name}>
			{cat.name}
		</option>
	));

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const budget = await create(formData);
			setBudgets([budget, ...budgets]);
		} catch {
			setError('Something went wrong - please try again later');
		}
	}

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div className='w-full h-full flex flex-col justify-center items-center'>
			<form
				className='flex flex-col w-1/4 h-1/3 justify-evenly items-center'
				onSubmit={handleSubmit}>
				<label className='flex flex-col w-full'>
					Category:
					<select
						className='input input-primary rounded-md'
						name='category'
						value={formData.category}
						onChange={handleChange}>
						<option value={null}>Select Category...</option>
						{catOpts}
					</select>
				</label>
				<label className='flex flex-col w-full'>
					Duration:
					<input
						className='input input-primary rounded-md'
						type='text'
						name='frequency'
						value={formData.frequency}
						onChange={handleChange}
						autoComplete='off'
					/>
					<em className='text-base-300'>ex: 'weekly', 'monthly', etc...</em>
				</label>

				<label className='flex flex-col w-full'>
					Amount:
					<input
						className='input input-primary rounded-md'
						type='number'
						name='amount'
						value={formData.amount}
						onChange={handleChange}
						autoComplete='off'
					/>
				</label>
				<button
					className='btn btn-accent w-full text-lg text-accent-content rounded-md'
					type='submit'>
					Save
				</button>
			</form>
			<p className='text-lg text-error'>{error}</p>
		</div>
	);
}
