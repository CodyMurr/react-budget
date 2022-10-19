import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BudgetContext from '../context/BudgetContext';
import ToggleContext from '../context/ToggleContext';
import BudgetEditor from './BudgetEditor';
import BudgetItem from './BudgetItem';
// import EditBtn from './custom/EditBtn';

export default function Budget({ budget, categories }) {
	const { toggleState } = useContext(ToggleContext);

	const { setActiveBudget } = useContext(BudgetContext);

	const [editMode, setEditMode] = useState(false);

	function toggleEditMode() {
		toggleState(setEditMode);
	}
	return (
		<>
			<Link
				to={`/budgets/${budget._id}`}
				className='flex flex-col relative w-3/5 m-2'
				onClick={() => setActiveBudget(budget)}>
				<label>
					<h3 className='w-full rounded-t bg-secondary text-neutral-content pl-2 flex justify-start font-bold text-lg'>
						{budget.category}
					</h3>
					<section className='flex w-full pl-2 bg-base-300 rounded-b'>
						<BudgetItem label={'Expenses'} item={budget.expenses.length} />

						<BudgetItem label={'Amount'} item={`$${budget.amount}`} />
					</section>
				</label>
			</Link>

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
