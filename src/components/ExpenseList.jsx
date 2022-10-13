import { useState, useContext } from 'react';
import ToggleContext from '../context/ToggleContext';
import ModalButton from './custom/ModalButton';
import ExpenseForm from './ExpenseForm';

export default function ExpenseList({ budget, categories }) {
	const { toggleState } = useContext(ToggleContext);

	const [showExpenseForm, setShowExpenseForm] = useState(false);

	function toggleExpForm() {
		toggleState(setShowExpenseForm);
	}
	return (
		<section className='w-5/12 flex flex-col justify-between items-center mt-4'>
			{budget.expenses.map((exp) => (
				<section key={exp._id}>
					<p>{exp.category}</p>
					<p>${exp.amount}</p>
					<p>{exp.payee}</p>
					<p>{exp.isPaid.toString()}</p>
				</section>
			))}

			{showExpenseForm ? (
				<ExpenseForm budget={budget} categories={categories} />
			) : (
				<ModalButton name='Expense' handleClick={toggleExpForm} />
			)}
			<em>Showing {budget.expenses.length} Expenses</em>
		</section>
	);
}
