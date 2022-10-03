import { create } from '../utilities/budgets-api';
import { useState } from 'react';

export default function BudgetForm({
	user,
	categories,
	budgets,
	setBudgets,
	showBudgetForm,
	toggleForm,
}) {
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
			setFormData({
				category: '',
				amount: '',
			});
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
		<div
			className={`modal ${
				showBudgetForm && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 justify-evenly items-center'
				onSubmit={handleSubmit}>
				<label
					className='btn btn-sm btn-circle absolute right-2 top-2'
					onClick={toggleForm}>
					✕
				</label>
				<label className='flex flex-col w-full m-3'>
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

				<label className='flex flex-col w-full m-3'>
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
				<section className='modal-action'>
					<button
						className='btn btn-accent w-full text-lg text-accent-content rounded-md m-3'
						type='submit'>
						Save
					</button>
				</section>
			</form>
			<p className='text-lg text-error'>{error}</p>
		</div>
	);
}
