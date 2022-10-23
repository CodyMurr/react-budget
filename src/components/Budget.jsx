import { useState, useContext } from 'react';
import ToggleContext from '../context/ToggleContext';
import BudgetDetail from './BudgetDetail';
import BudgetItem from './BudgetItem';
// import EditBtn from './custom/EditBtn';

export default function Budget({ budget, categories }) {
	const { toggleState } = useContext(ToggleContext);

	const [showBudgetDetail, setShowBudgetDetail] = useState(false);

	function toggleBudgetDetail() {
		toggleState(setShowBudgetDetail);
	}
	return (
		<>
			<label
				className='flex flex-col relative w-2/5 m-2 cursor-pointer'
				onClick={toggleBudgetDetail}>
				<h3 className='w-full rounded-t bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg'>
					{budget.category}
				</h3>
				<section className='flex w-full justify-center pl-2 bg-base-300 rounded-b'>
					{/* <BudgetItem label={'Expenses'} item={budget.expenses.length} /> */}

					<BudgetItem label={'Amount'} item={`$${budget.amount}`} />

					{/* <EditBtn toggleEditMode={toggleEditMode} /> */}
				</section>
				<section></section>
			</label>

			<div
				className={`modal ${
					showBudgetDetail && 'modal-open'
				} w-full flex flex-col items-center`}>
				<BudgetDetail
					budget={budget}
					categories={categories}
					toggleDetail={toggleBudgetDetail}
					showBudgetDetail={showBudgetDetail}
				/>
			</div>
		</>
	);
}
