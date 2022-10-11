import { useState } from 'react';
import ExitButton from './custom/ExitButton';
import FormInput from './custom/FormInput';
import RadioInput from './custom/RadioInput';
export default function BudgetEditor({ budget, toggleEdit, categories }) {
	const [formData, setFormData] = useState({
		category: '',
		amount: '',
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}
	return (
		<div className='modal-box flex flex-col w-7/12 max-w-6xl h-1/4 items-center bg-base-200 text-base-content'>
			<h2 className='text-xl text-primary font-bold'>
				Edit Budget For&nbsp;
				<span className='text-info'>{budget.category}</span>
			</h2>
			<p className='text-secondary-focus'>({budget._id})</p>
			<ExitButton handleClick={toggleEdit} />
			<form className='w-full relative flex flex-col justify-evenly'>
				<fieldset className='w-full'>
					<legend className='flex flex-col text-xl w-full my-3 font-bold'>
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
					type='number'
					title='Amount'
					value={budget.amount}
					formData={formData}
					handleChange={handleChange}
				/>
				<span className='flex justify-between w-full h-2/6'>
					<button
						className='btn btn-accent rounded text-accent-content w-3/12 font-bold text-lg'
						type='submit'>
						Save Changes
					</button>
					<button
						className='btn btn-secondary rounded text-secondary-content w-3/12 text-center cursor-pointer'
						onClick={toggleEdit}>
						cancel
					</button>
					<button className='btn btn-error rounded w-3/12'>Delete</button>
				</span>
			</form>
		</div>
	);
}
