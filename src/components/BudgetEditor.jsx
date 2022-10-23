import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import ExitButton from './custom/ExitButton';
import FormInput from './custom/FormInput';
import RadioInput from './custom/RadioInput';

export default function BudgetEditor({ budget, toggleEdit }) {
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
		<div className='modal-box flex flex-col w-11/12 max-w-6xl h-1/2 items-center justify-evenly bg-base-300 text-base-content'>
			<h2 className='h-1/4 w-full text-xl text-primary font-bold flex justify-center items-center bg-info-content'>
				Edit Budget For&nbsp;
				<span className='text-info'>{budget.category}</span>
			</h2>
			{/* <p className='text-secondary-focus'>({budget._id})</p> */}
			<ExitButton handleClick={toggleEdit} />
			<form className='w-full h-3/4 relative flex justify-evenly'>
				<section className='w-5/12 flex flex-col justify-between items-center mt-4'>
					<fieldset className='w-full h-1/3'>
						<legend className='flex flex-col justify-center text-xl w-full h-1/2 my-3 font-bold'>
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
						labelStyle='h-1/3 w-full'
						// inputStyle=''
						formData={formData}
						handleChange={handleChange}
					/>
					<section className='flex w-full h-1/3 items-center justify-between'>
						<button
							className='btn btn-accent rounded text-accent-content w-5/12 font-bold text-lg'
							type='submit'>
							Save Changes
						</button>
						<span className='flex w-5/12 justify-center items-center text-error text-lg cursor-pointer font-semibold hover:underline'>
							<FaTrashAlt className='m-2' />
							&nbsp;
							<p className='m-2'>Delete Budget</p>
						</span>
					</section>
				</section>
			</form>
		</div>
	);
}
