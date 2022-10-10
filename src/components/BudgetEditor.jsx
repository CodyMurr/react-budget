import { useState } from 'react';
import ExitButton from './custom/ExitButton';
import FormInput from './custom/FormInput';
import SelectInput from './custom/SelectInput';

export default function BudgetEditor({
	budget,
	toggleEdit,
	categories,
	toggleDetail,
}) {
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
		<form className='modal-box relative flex flex-col w-1/2 justify-evenly items-center'>
			<ExitButton handleClick={toggleDetail} />
			<span className='flex flex-col w-full h-2/6'>
				<button className='text-accent font-bold text-lg' type='submit'>
					Save Changes
				</button>
				<p
					className='text-error w-full text-center hover:cursor-pointer hover:underline'
					onClick={toggleEdit}>
					cancel
				</p>
			</span>
			<SelectInput
				title='Category'
				formData={formData}
				optData={categories}
				defaultMsg={budget.category}
				handleChange={handleChange}
			/>
			<FormInput
				type='number'
				title='Amount'
				value={budget.amount}
				formData={formData}
				handleChange={handleChange}
			/>
		</form>
	);
}
