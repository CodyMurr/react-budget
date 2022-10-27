import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import FormInput from './custom/FormInput';
import ExpenseForm from './ExpenseForm';

export default function BudgetDetail({
	budget,
	showBudgetDetail,
	deactivateBudget,
}) {
	const [showExpForm, setShowExpForm] = useState(false);

	function toggleExpForm() {
		setShowExpForm(!showExpForm);
	}
	return (
		<div className={`modal ${showBudgetDetail && 'modal-open'}`}>
			<div className='modal-box relative flex flex-col w-1/2 justify-evenly items-center'>
				<label
					className='btn btn-sm btn-circle absolute right-2 top-2'
					onClick={deactivateBudget}>
					✕
				</label>

				<span className='flex justify-evenly items-center w-1/4 h-2/6 cursor-pointer ml-5 text-accent text-lg font-bold'>
					<FaPen size={20} />
					<p>Edit</p>
				</span>

				<FormInput
					title='Category'
					formData={{ ...budget }}
					isDisabled={true}
				/>
				<FormInput title='Amount' formData={{ ...budget }} isDisabled={true} />
				<label
					className='btn modal-button btn-ghost rounded-md w-1/3'
					onClick={toggleExpForm}>
					+ Add Expense
				</label>

				{showExpForm && (
					<ExpenseForm
						showExpForm={showExpForm}
						toggleExpForm={toggleExpForm}
					/>
				)}
			</div>
		</div>
	);
}
