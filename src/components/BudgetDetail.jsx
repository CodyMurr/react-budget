import { useState, useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import ToggleContext from '../context/ToggleContext';
import BudgetEditor from './BudgetEditor';
import DisabledInput from './custom/DisabledInput';

export default function BudgetDetail({
	budget,
	showBudgetDetail,
	toggleDetail,
	categories,
}) {
	const { toggleState } = useContext(ToggleContext);

	const [editMode, setEditMode] = useState(false);

	function toggleEdit() {
		toggleState(setEditMode);
	}

	return (
		<div className={`modal ${showBudgetDetail && 'modal-open'}`}>
			{editMode ? (
				<BudgetEditor
					budget={budget}
					toggleEdit={toggleEdit}
					categories={categories}
					toggleDetail={toggleDetail}
				/>
			) : (
				<div className='modal-box relative flex flex-col w-1/2 justify-evenly items-center'>
					<label
						className='btn btn-sm btn-circle absolute right-2 top-2'
						onClick={toggleDetail}>
						✕
					</label>

					<span
						className='flex justify-evenly items-center w-1/4 h-2/6 cursor-pointer ml-5 text-accent text-lg font-bold'
						onClick={toggleEdit}>
						<FaPen size={20} />
						<p>Edit</p>
					</span>

					<DisabledInput
						title='Category'
						formData={{ ...budget }}
						handleChange=''
						isDisabled={true}
					/>
					<DisabledInput
						title='Amount'
						formData={{ ...budget }}
						handleChange=''
						isDisabled={true}
					/>
				</div>
			)}
		</div>
	);
}
