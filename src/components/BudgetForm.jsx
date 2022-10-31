import { useState, useContext } from 'react';
import FormInput from './custom/FormInput';
import RadioInput from './custom/RadioInput';
import FormHeader from './custom/FormHeader';
import ActionBtns from './custom/ActionBtns';
import BudgetContext from '../context/Budgets/BudgetContext';
import CategoryList from './CategoryList';

export default function BudgetForm({
	showBudgetForm,
	toggleForm,
	FREQUENCIES,
}) {
	const { categories, createBudget } = useContext(BudgetContext);

	const [formData, setFormData] = useState({
		category: '',
		amount: '',
		frequency: '',
	});

	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await createBudget(formData);
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

	const freqNames = Object.keys(FREQUENCIES);

	return (
		<div
			className={`modal ${
				showBudgetForm && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<FormHeader name='Budget' />
				<label className='flex flex-col w-full h-1/4 justify-center font-bold text-xl'>
					Category:
					<CategoryList categories={categories} handleChange={handleChange} />
				</label>

				<FormInput
					title='Amount'
					type='number'
					formData={formData}
					handleChange={handleChange}
				/>

				<fieldset className='w-full flex flex-col my-5'>
					<label className='w-full text-xl font-bold'>How often?</label>
					<div className='flex flex-col w-full justify-center items-center'>
						{freqNames.map((f) => (
							<RadioInput
								title={f}
								name='frequency'
								formData={formData}
								handleChange={handleChange}
								key={f}
							/>
						))}
						{/* <RadioInput
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
						/> */}
					</div>
				</fieldset>
				<ActionBtns handleCancel={toggleForm} />
			</form>
			<p className='text-lg text-error'>{error}</p>
		</div>
	);
}
