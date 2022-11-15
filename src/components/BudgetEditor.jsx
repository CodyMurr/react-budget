import { useState } from 'react';
import ActionBtns from './custom/ActionBtns';
import CategoryList from './CategoryList';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';

export default function BudgetEditor({
	budget,
	categories,
	toggleState,
	handleToggle,
	updateBudget,
	routeChange,
}) {
	const [formData, setFormData] = useState(budget);
	const [error, setError] = useState('');

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	async function handleUpdate(e) {
		e.preventDefault();
		try {
			await updateBudget(budget._id, formData);

			routeChange('/budgets');
		} catch (err) {
			setError(err);
		}
	}

	return (
		<div
			className={`modal ${
				toggleState && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleUpdate}>
				<FormHeader name='Edit Budget' />
				<label className='flex flex-col w-full h-1/4 justify-center font-bold text-xl'>
					Category:
					<input
						className='input input-ghost rounded-md w-full h-1/3'
						type='text'
						name='category'
						value={budget.category}
						disabled
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
