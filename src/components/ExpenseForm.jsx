import { useState, useContext } from 'react';
import BudgetContext from '../context/Budgets/BudgetContext';
import ActionBtns from './custom/ActionBtns';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';
import CategoryList from './CategoryList';

export default function ExpenseForm({ budget, showExpForm, toggleExpForm }) {
	const { categories } = useContext(BudgetContext);

	const [formData, setFormData] = useState({
		category: '',
		amount: '',
		frequency: '',
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
			<div className='modal-box rounded-lg relative w-full max-w-6xl h-full'>
				<form className='w-full h-full flex flex-col justify-evenly items-center'>
					<FormHeader name='Expense' />
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
		</div>
	);
}
