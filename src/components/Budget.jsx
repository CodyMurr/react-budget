import { useState } from 'react';
import BudgetDetail from './BudgetDetail';
import BudgetEditor from './BudgetEditor';
import BudgetItem from './BudgetItem';
import EditBtn from './custom/EditBtn';

export default function Budget({ budget, FREQUENCIES, freqNames }) {
	const [showBudgetDetail, setShowBudgetDetail] = useState(false);
	const [editMode, setEditMode] = useState(false);

	function toggleEditMode() {
		setEditMode(!editMode);
	}

	function handleActiveBudget() {
		setShowBudgetDetail(true);
	}

	function deactivateBudget() {
		setShowBudgetDetail(false);
	}

	return (
		<>
			<section className='flex flex-col relative w-2/5 m-2'>
				<h3
					className='w-full rounded-t bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg cursor-pointer'
					onClick={handleActiveBudget}>
					{budget.category}
				</h3>
				<BudgetDetail
					budget={budget}
					showBudgetDetail={showBudgetDetail}
					deactivateBudget={deactivateBudget}
				/>
				<section className='flex justify-between w-full'>
					<BudgetItem
						amt={budget.amount}
						frequency={FREQUENCIES[budget.frequency]}
					/>
					<EditBtn toggleEditMode={toggleEditMode} />
				</section>
				{editMode && (
					<BudgetEditor
						budget={budget}
						toggleState={editMode}
						handleToggle={toggleEditMode}
						freqNames={freqNames}
					/>
				)}
			</section>
		</>
	);
}
