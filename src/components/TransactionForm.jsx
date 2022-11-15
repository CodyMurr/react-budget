import { useState } from 'react';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';
import ExitButton from './custom/ExitButton';
import ActionBtns from './custom/ActionBtns';

export default function TransactionForm({ budget, toggleState }) {
	const [formData, setFormData] = useState({
		name: '',
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
		<div
			className={`modal ${
				toggleState && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'>
				<ExitButton handleClick={toggleState} />
				<FormHeader name={`New Transaction for ${budget.category}`} />
				<FormInput
					title='Name'
					formData={formData}
					handleChange={handleChange}
				/>
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
				<ActionBtns handleCancel={toggleState} />
			</form>
		</div>
	);
}
