import { useState } from 'react';
import FormInput from './custom/FormInput';

export default function ExpenseForm({ budget, showExpForm }) {
	const [formData, setFormData] = useState({
		category: '',
		amount: '',
		payee: '',
		isPaid: false,
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div
			className={`modal ${
				showExpForm && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form className='modal-box relative flex flex-col w-1/2 max-w-6xl h-2/5 justify-evenly items-center'>
				<section className='w-full'>
					<FormInput
						// labelStyle
						// inputStyle
						title='Amount'
						type='number'
						formData={formData}
						handleChange={handleChange}
					/>
					<FormInput
						// labelStyle
						// inputStyle
						title='Payee'
						formData={formData}
						handleChange={handleChange}
					/>
					<label>
						This Expense is Paid
						<input
							type='checkbox'
							name='isPaid'
							onChange={handleChange}
							checked={formData.isPaid}
						/>
					</label>
				</section>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
}
