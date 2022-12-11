import { useState, useContext } from 'react';
import FormInput from './custom/FormInput';
import ActionBtns from './custom/ActionBtns';
import BudgetContext from '../context/Budgets/BudgetContext';
import CategoryList from './CategoryList';

export default function BudgetForm() {
	const { categories, createBudget, routeChange } = useContext(BudgetContext);

	const [formData, setFormData] = useState({
		category: '',
		amount: '',
	});

	const [error, setError] = useState('');

	function goToBudgets() {
		routeChange('/budgets');
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await createBudget(formData);
			goToBudgets();
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
		<>
			<form
				className='relative flex flex-col w-full h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<section className='w-full h-28 flex justify-center items-center'>
					<h2 className='text-3xl font-bold text-secondary-content'>
						New Budget
					</h2>
				</section>
				<label className='flex flex-col w-3/4 h-28 justify-center font-bold text-xl'>
					Category:
					<CategoryList
						categories={categories}
						value={formData.category}
						handleChange={handleChange}
					/>
				</label>

				<FormInput
					title='Amount'
					type='number'
					formData={formData}
					handleChange={handleChange}
				/>

				<ActionBtns handleCancel={goToBudgets} />
			</form>
			<p className='text-lg text-error'>{error}</p>
		</>
	);
}
