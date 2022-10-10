import { create } from '../utilities/budgets-api';
import { useState } from 'react';
import FormInput from './custom/FormInput';
import SelectInput from './custom/SelectInput';
import ExitButton from './custom/ExitButton';

export default function BudgetForm({
	budgets,
	categories,
	setBudgets,
	showBudgetForm,
	toggleForm,
}) {
	const [formData, setFormData] = useState({
		category: '',
		amount: '',
	});

	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const budget = await create(formData);
			setBudgets([budget, ...budgets]);
			setFormData({
				category: '',
				amount: '',
			});
			toggleForm();
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
				<ExitButton handleClick={toggleForm} />

				<SelectInput
					title='Category'
					formData={formData}
					optData={categories}
					defaultMsg='Select Category...'
					handleChange={handleChange}
				/>

				<FormInput
					title='Amount'
					type='number'
					formData={formData}
					handleChange={handleChange}
				/>

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
