import { useState } from 'react';
import ActionBtns from './custom/ActionBtns';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';
import CategoryList from './CategoryList';

export default function ExpenseForm({
	budget,
	categories,
	showExpForm,
	toggleExpForm,
}) {
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

	const subcats = categories.find(
		(c) => c.name === budget.category,
	).subcategories;

	return (
		<div
			className={`modal ${
				showExpForm && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'>
				<FormHeader name={`New Expense for ${budget.category}`} />

				<label className='flex flex-col justify-center w-full text-xl my-3 font-bold h-1/4'>
					Category:
					<CategoryList categories={subcats} handleChange={handleChange} />
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

				<label className='w-full text-lg font-bold'>
					<input
						className='checkbox mr-3 checkbox-primary'
						type='checkbox'
						name='isPaid'
						onChange={handleChange}
						checked={!!formData.isPaid}
					/>
					This Expense is Paid
				</label>

				<ActionBtns handleCancel={toggleExpForm} />
			</form>
		</div>
	);
}
