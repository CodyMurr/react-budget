import { create } from '../utilities/budgets-api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './custom/FormInput';
import RadioInput from './custom/RadioInput';
import CategoryList from './CategoryList';

export default function BudgetForm({ budgets, categories, setBudgets }) {
	const [formData, setFormData] = useState({
		category: '',
		frequency: '',
		amount: '',
	});

	const [error, setError] = useState('');

	const navigate = useNavigate();

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

	function handleCancel() {
		setFormData({
			category: '',
			frequency: '',
			amount: '',
		});
		navigate('/budgets');
	}

	return (
		<div className='w-3/4 h-full'>
			<form
				className='relative flex flex-col w-full h-1/2 justify-evenly items-center'
				onSubmit={handleSubmit}>
				<CategoryList
					categories={categories}
					formData={formData}
					handleChange={handleChange}
				/>

				<fieldset className='w-full h-1/4 flex flex-col justify-evenly my-3'>
					<legend className='text-xl w-full font-bold'>How often?</legend>
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
						Save
					</button>

					<button
						className='btn btn-error rounded text-error-content w-5/12 font-bold text-lg'
						onClick={handleCancel}>
						Cancel
					</button>
				</span>
			</form>
			<p className='text-lg text-error'>{error}</p>
		</div>
	);
}
