import { useContext, useState } from 'react';
import FormContext from '../context/forms/FormContext';
import FormInput from './custom/FormInput';
import SubCategoryList from './SubCategoryList';

export default function ExpenseForm({ budget, categories }) {
	const { formData, handleChange } = useContext(FormContext);

	const category = categories.find((cat) => cat.name === budget.category);

	return (
		<form className='w-full'>
			<SubCategoryList
				formData={formData}
				category={category}
				handleChange={handleChange}
			/>
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
				<input type='checkbox' name='isPaid' onChange={handleChange} />
			</label>
			<button
				className='btn btn-accent rounded text-accent-content w-5/12 font-bold text-lg'
				type='submit'>
				Save
			</button>
		</form>
	);
}
