import { create } from '../utilities/budgets-api';
import { useState, useContext } from 'react';
import FormContext from '../context/forms/FormContext';
import FormInput from './custom/FormInput';
import ExitButton from './custom/ExitButton';
import RadioInput from './custom/RadioInput';
import CategoryList from './CategoryList';

export default function BudgetForm({
	budgets,
	categories,
	setBudgets,
	showBudgetForm,
	toggleForm,
}) {
	const { formData, handleChange } = useContext(FormContext);
	// const [formData, setFormData] = useState({
	// 	category: '',
	// 	frequency: '',
	// 	amount: '',
	// });

	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const budget = await create(formData);
			setBudgets([budget, ...budgets]);
			toggleForm();
		} catch {
			setError('Something went wrong - please try again later');
		}
	}

	return (
		<div
			className={`modal ${
				showBudgetForm && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-2/5 justify-evenly items-center'
				onSubmit={handleSubmit}>
				<ExitButton handleClick={toggleForm} />

				<CategoryList
					categories={categories}
					formData={formData}
					handleChange={handleChange}
				/>

				<fieldset className='w-full'>
					<legend className='flex flex-col text-lg w-full my-3 font-bold'>
						How often?
					</legend>
					<div className='flex w-full justify-between'>
						<RadioInput
							title='Weekly'
							name='frequency'
							formData={formData}
							handleChange={handleChange}
						/>
						<RadioInput
							title='Bi-Weekly'
							name='frequency'
							formData={formData}
							handleChange={handleChange}
						/>
						<RadioInput
							title='Monthly'
							name='frequency'
							formData={formData}
							handleChange={handleChange}
						/>
					</div>
				</fieldset>

				<FormInput
					title='Amount'
					type='number'
					formData={formData}
					handleChange={handleChange}
				/>

				<span className='flex justify-between w-full'>
					<button
						className='btn btn-accent rounded text-accent-content w-5/12 font-bold text-lg mr-5'
						type='submit'>
						Save Changes
					</button>
					<button
						className='btn btn-secondary rounded text-secondary-content w-5/12 text-center cursor-pointer'
						onClick={toggleForm}>
						cancel
					</button>
				</span>
			</form>
			<p className='text-lg text-error'>{error}</p>
		</div>
	);
}
