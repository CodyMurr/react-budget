import { useState, useContext } from 'react';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';
import ExitButton from './custom/ExitButton';
import ActionBtns from './custom/ActionBtns';
import ExpenseContext from '../context/Expenses/ExpenseContext';

export default function ExpenseForm({ budget, category, toggleState }) {
	const { newExpense } = useContext(ExpenseContext);

	const [formData, setFormData] = useState({
		budget,
		category: '',
		amount: '',
		isPaid: '',
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
			await newExpense(formData);
			toggleState();
		} catch (error) {
			console.log(error);
		}
	}
	const subCats = category.subcategories;
	return (
		<div
			className={`modal ${
				toggleState && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<ExitButton handleClick={toggleState} />
				<FormHeader name='New expense' />

				<label className='flex flex-col w-full h-28 justify-center font-bold text-xl'>
					Category:
					<select
						className='input input-primary rounded-md w-full h-1/2'
						name='category'
						value={formData.category}
						onChange={handleChange}>
						<option value={null}>Choose Category</option>
						{subCats.map((cat) => (
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
				<label className='flex flex-col justify-center w-full text-xl my-3 font-bold h-28'>
					<input type='checkbox' name='isPaid' onChange={handleChange} />
					This expense is paid
				</label>
				<ActionBtns handleCancel={toggleState} />
			</form>
		</div>
	);
}
