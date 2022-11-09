import { useState, useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import BudgetContext from '../context/Budgets/BudgetContext';
import BudgetEditor from './BudgetEditor';

export default function Budget({ budget }) {
	const { categories } = useContext(BudgetContext);

	const [editMode, setEditMode] = useState(false);

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
					${budget.amount}
				</section>

				<p className='w-1/3 flex justify-end items-center pr-2'>
					<FaPen size={15} />
					&nbsp;&nbsp; Edit
				</p>
			</section>

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
