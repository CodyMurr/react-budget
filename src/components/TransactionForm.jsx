import { useState } from 'react';
import FormInput from './custom/FormInput';

export default function TransactionForm({ budget }) {
	const [formData, setFormData] = useState({
		category: budget.category,
		amount: '',
		payee: '',
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<form className='relative flex flex-col w-full h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'>
			<FormInput
				title='Amount'
				type='number'
				formData={formData}
				handleChange={handleChange}
			/>
			<FormInput
				title='Payee'
				formData={formData}
				handleChange={handleChange}
			/>
		</form>
	);
}
