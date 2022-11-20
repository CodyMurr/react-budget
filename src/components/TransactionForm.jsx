import { useState } from 'react';
import { createTransaction } from '../utilities/transactions-api';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';
import ExitButton from './custom/ExitButton';
import ActionBtns from './custom/ActionBtns';

export default function TransactionForm({ categories, toggleState }) {
	const [t, setT] = useState([]);
	const [formData, setFormData] = useState({
		category: '',
		amount: '',
		payee: '',
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const tr = await createTransaction(formData);
			setT([...t, tr]); // replace with reducer
			toggleState();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div
			className={`modal ${
				toggleState && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<ExitButton handleClick={toggleState} />
				<FormHeader name='New Transaction' />

				<label className='flex flex-col w-full h-28 justify-center font-bold text-xl'>
					Category:
					<select
						className='input input-primary rounded-md w-full h-1/2'
						name='category'
						value={formData.category}
						onChange={handleChange}>
						<option value={null}>Choose Category</option>
						{categories.map((cat) => (
							<option value={cat.name} key={cat.name}>
								{cat.name}
							</option>
						))}
					</select>
				</label>

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
