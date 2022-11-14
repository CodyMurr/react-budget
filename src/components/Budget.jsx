import { useState, useContext } from 'react';
import { FaPen, FaPlus } from 'react-icons/fa';
import BudgetContext from '../context/Budgets/BudgetContext';
import BudgetEditor from './BudgetEditor';

export default function Budget({ budget }) {
	const { categories } = useContext(BudgetContext);

	const [editMode, setEditMode] = useState(false);

	function toggleEditMode() {
		setEditMode(!editMode);
	}

	return (
		<section className='flex flex-col w-2/5 m-8'>
			<h3 className='w-full relative rounded-t bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg cursor-pointer'>
				{budget.category}
				<FaPen
					className='absolute right-3 top-1/4'
					size={15}
					onClick={toggleEditMode}
				/>
			</h3>

			<section className='flex justify-between w-full'>
				<section className='w-1/3 flex items-center text-lg font-bold p-3'>
					{budget.amountSpent ? budget.amountSpent : 0} / ${budget.amount}
				</section>

				<p className='w-1/3 flex justify-end items-center pr-2 cursor-pointer'>
					<FaPlus size={15} />
					&nbsp; Add Transaction
				</p>
			</section>
			<progress
				className='progress progress-primary w-full h-3 border-2 border-secondary'
				value={budget.amountSpent}
				max={budget.amount}></progress>

			{editMode && (
				<BudgetEditor
					budget={budget}
					categories={categories}
					toggleState={editMode}
					handleToggle={toggleEditMode}
				/>
			)}
		</section>
	);
}
