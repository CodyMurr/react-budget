import { useState, useContext } from 'react';
import { FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa';
import BudgetContext from '../context/Budgets/BudgetContext';
import ToggleContext from '../context/Toggle/ToggleContext';
import BudgetEditor from './BudgetEditor';
import ExpenseForm from './ExpenseForm';

export default function Budget({ budget, routeChange }) {
	const { categories, deleteBudget, updateBudget } = useContext(BudgetContext);
	const { toggleState } = useContext(ToggleContext);

	const [editexpenses, setEditexpenses] = useState(false);
	const [editBudget, setEditBudget] = useState(false);

	function handleDelete() {
		try {
			deleteBudget(budget._id);
			routeChange('/budgets');
		} catch (error) {
			console.log(error);
		}
	}

	const category = categories.find((cat) => cat.name === budget.category);

	return (
		<section className='flex flex-col w-2/5 m-8'>
			<h3 className='w-full relative rounded-t bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg'>
				{budget.category}
				<span className='absolute right-3 top-1/4 flex justify-between w-10'>
					<FaPen
						size={15}
						className='cursor-pointer'
						onClick={() => {
							toggleState(setEditBudget);
						}}
					/>
					<FaTrashAlt
						size={15}
						className='text-error cursor-pointer'
						onClick={handleDelete}
					/>
				</span>
			</h3>

			<section className='flex justify-between w-full'>
				<section className='w-1/3 flex items-center text-lg font-bold p-3'>
					${budget.amountSpent ? budget.amountSpent : 0} / ${budget.amount}
				</section>

				<p
					className='w-1/3 flex justify-end items-center pr-2 cursor-pointer'
					onClick={() => {
						toggleState(setEditexpenses);
					}}>
					<FaPlus size={15} />
					&nbsp; Add expense
				</p>
			</section>
			<progress
				className='progress progress-primary w-full h-3 border-2 border-secondary'
				value={budget.amountSpent}
				max={budget.amount}></progress>

			{editBudget && (
				<BudgetEditor
					budget={budget}
					categories={categories}
					toggleState={editBudget}
					handleToggle={() => toggleState(setEditBudget)}
					updateBudget={updateBudget}
					routeChange={routeChange}
				/>
			)}
			{editexpenses && (
				<ExpenseForm
					budget={budget._id}
					category={category}
					toggleState={() => toggleState(setEditexpenses)}
				/>
			)}
		</section>
	);
}
