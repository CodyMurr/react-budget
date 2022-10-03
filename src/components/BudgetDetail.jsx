import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { toggleUI } from '../global-functions';

export default function BudgetDetail({
	budget,
	showBudgetDetail,
	toggleDetail,
}) {
	const [editMode, setEditMode] = useState(false);

	function toggleEdit() {
		toggleUI(editMode, setEditMode);
	}

	return (
		<div className={`modal ${showBudgetDetail && 'modal-open'}`}>
			<form className='modal-box relative flex flex-col w-1/2 justify-evenly items-center'>
				<label
					className='btn btn-sm btn-circle absolute right-2 top-2'
					onClick={toggleDetail}>
					✕
				</label>
				{editMode ? (
					<span className='flex flex-col w-full'>
						<button className='text-accent font-bold text-lg' type='submit'>
							Save Changes
						</button>
						<p
							className='text-error w-full text-center hover:cursor-pointer hover:underline'
							onClick={toggleEdit}>
							cancel
						</p>
					</span>
				) : (
					<span
						className='flex justify-evenly items-center w-1/4 cursor-pointer ml-5 text-accent text-lg font-bold'
						onClick={toggleEdit}>
						<FaPen size={20} />
						<p>Edit</p>
					</span>
				)}

				<label className='font-bold text-lg w-full flex justify-between m-3'>
					Category:{' '}
					<input
						className={`input justify-start w-1/3 mr-10 text-xl rounded-md  ${
							editMode ? 'input-primary' : 'input-ghost'
						}`}
						type='text'
						disabled={!editMode}
						value={budget.category}
					/>
				</label>
				<label className='font-bold text-lg w-full flex justify-between m-3'>
					Amount:{' '}
					<input
						className={`input justify-start w-1/3 mr-10 text-xl rounded-md  ${
							editMode ? 'input-primary' : 'input-ghost'
						}`}
						type='text'
						disabled={!editMode}
						value={budget.amount}
					/>
				</label>
			</form>
		</div>
	);
}
