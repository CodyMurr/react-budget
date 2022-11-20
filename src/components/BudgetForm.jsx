import { useState, useContext } from 'react';
import FormInput from './custom/FormInput';
import FormHeader from './custom/FormHeader';
import ActionBtns from './custom/ActionBtns';
import BudgetContext from '../context/Budgets/BudgetContext';
import CategoryList from './CategoryList';

export default function BudgetForm({ toggleState, handleToggle }) {
	const { categories, createBudget } = useContext(BudgetContext);

	const [formData, setFormData] = useState({
		category: '',
		amount: '',
	});

	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await createBudget(formData);
			handleToggle();
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
				toggleState && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<FormHeader name='New Budget' />
				<label className='flex flex-col w-full h-28 justify-center font-bold text-xl'>
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

				<ActionBtns handleCancel={handleToggle} />
			</form>
			<p className='text-lg text-error'>{error}</p>
		</div>
	);
}
