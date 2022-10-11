import { useState, useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import ToggleContext from '../context/ToggleContext';
import BudgetEditor from './BudgetEditor';

export default function Budget({ budget, categories }) {
	const { toggleState } = useContext(ToggleContext);

	const [editMode, setEditMode] = useState(false);

	function toggleEditMode() {
		toggleState(setEditMode);
	}
	return (
		<>
			<label
				className='flex flex-col relative w-3/4 border-t-2 m-2 rounded'
				onClick={toggleEditMode}>
				<h3 className='w-4/5 bg-neutral text-neutral-content pl-2 flex justify-start font-bold text-lg'>
					{budget.category}
				</h3>
				<section className='flex w-full pl-2'>
					<p className='w-1/4 flex justify-start'>
						<span className='font-bold'>{budget.expenses.length}</span>
						&nbsp;&nbsp; Expenses
					</p>
					<p className='w-1/4 flex justify-start'>
						<span className='font-bold'>Total:</span>&nbsp;&nbsp;$
						{budget.amount}
					</p>
					<p className='absolute right-0 top-0 w-1/5 h-full flex justify-center items-center bg-accent text-accent-content cursor-pointer'>
						<FaPen size={15} />
						&nbsp;&nbsp;
						<span className='font-bold'>Edit</span>
					</p>
				</section>
			</label>
			{editMode && (
				<div
					className={`modal ${editMode && 'modal-open'} w-full flex flex-col`}>
					<BudgetEditor
						budget={budget}
						categories={categories}
						toggleEdit={toggleEditMode}
					/>
				</div>
			)}
		</>
	);
}
