import { useState, useContext } from 'react';
import BudgetContext from '../context/Budgets/BudgetContext';
import BudgetEditor from './BudgetEditor';
import ModalButton from './custom/ModalButton';
import ExpenseForm from './ExpenseForm';
import OptionsMenuBtn from './OptionsMenuBtn';
import OptionsMenu from './OptionsMenu';

export default function Budget({ budget, FREQUENCIES, freqNames }) {
	const { categories } = useContext(BudgetContext);

	const [editMode, setEditMode] = useState(false);
	const [showExpForm, setShowExpForm] = useState(false);

	function toggleExpForm() {
		setShowExpForm(!showExpForm);
	}

	function toggleEditMode() {
		setEditMode(!editMode);
	}

	return (
		<section className='flex flex-col relative w-2/5 m-8'>
			<h3 className='w-full rounded-t bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg cursor-pointer'>
				{budget.category}
			</h3>

			<section className='flex justify-between w-full'>
				<section className='w-1/3 flex items-center text-lg font-bold p-3'>
					<p
						className={`${
							budget.amtSpent < budget.amount ? 'text-success' : 'text-error'
						}`}>
						${budget.amtSpent}
					</p>
					&nbsp;&nbsp;/&nbsp;&nbsp;${budget.amount}
				</section>
				<section className='w-1/3 flex justify-between items-center text-lg font-bold p-3'>
					{budget.expenses.length} Expenses
				</section>

				<section className='dropdown dropdown-right w-1/5 flex justify-end items-center text-lg font-bold p-3'>
					<OptionsMenuBtn />
					<OptionsMenu />
				</section>
				{/*
					<ModalButton name='Expense' handleClick={toggleExpForm} /> */}
			</section>

			{editMode && (
				<BudgetEditor
					budget={budget}
					categories={categories}
					toggleState={editMode}
					handleToggle={toggleEditMode}
					freqNames={freqNames}
				/>
			)}
			{showExpForm && (
				<ExpenseForm
					budget={budget}
					categories={categories}
					showExpForm={showExpForm}
					toggleExpForm={toggleExpForm}
				/>
			)}
		</section>
	);
}
