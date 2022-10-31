import { useState } from 'react';
import ActionBtns from './custom/ActionBtns';
import RadioInput from './custom/RadioInput';
import CategoryList from './CategoryList';
import FormHeader from './custom/FormHeader';
import FormInput from './custom/FormInput';
import SelectInput from './custom/SelectInput';

export default function BudgetEditor({ budget, toggleState, handleToggle }) {
	const [formData, setFormData] = useState({ ...budget });
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			// await createBudget(formData);
			handleToggle();
		} catch (e) {
			// setError('Something went wrong - please try again later');
			console.log(e);
		}
	}

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
			<form
				className='modal-box relative flex flex-col w-1/2 max-w-6xl h-3/5 justify-evenly items-center bg-base-300 shadow-2xl rounded-lg p-5'
				onSubmit={handleSubmit}>
				<FormHeader name='Edit Budget' />
				<label className='flex flex-col w-full h-1/4 justify-center font-bold text-xl'>
					Category:
					<CategoryList value={formData.category} handleChange={handleChange} />
				</label>

				<FormInput
					title='Amount'
					type='number'
					formData={budget}
					handleChange={handleChange}
				/>

				<ActionBtns handleCancel={handleToggle} />
			</form>
			{/* <p className='text-lg text-error'>{error}</p> */}
		</div>
	);
}
