import { useState, useContext } from 'react';
import ToggleContext from '../context/ToggleContext';
import BudgetEditor from './BudgetEditor';
import BudgetItem from './BudgetItem';
import EditBtn from './custom/EditBtn';

export default function Budget({ budget, categories }) {
	const { toggleState } = useContext(ToggleContext);

	const [editMode, setEditMode] = useState(false);

	function toggleEditMode() {
		toggleState(setEditMode);
	}
	return (
		<>
			<label className='flex flex-col relative w-3/5 m-2'>
				<h3 className='w-full rounded-t bg-secondary text-neutral-content pl-2 flex justify-start font-bold text-lg'>
					{budget.category}
				</h3>
				<section className='flex w-full pl-2 bg-base-300 rounded-b'>
					<BudgetItem label={'Expenses'} item={budget.expenses.length} />

					<BudgetItem label={'Amount'} item={`$${budget.amount}`} />

					<EditBtn toggleEditMode={toggleEditMode} />
				</section>
			</label>

			<div
				className={`modal ${
					editMode && 'modal-open'
				} w-full flex flex-col items-center`}>
				<BudgetEditor
					budget={budget}
					categories={categories}
					toggleEdit={toggleEditMode}
				/>
			</div>
		</>
	);
}
