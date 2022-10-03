// import {useState} from 'react'

export default function BudgetEditor() {
	return (
		<div
			className={`modal ${
				showBudgetForm && 'modal-open'
			} flex flex-col justify-center items-center`}>
			<form
				className='modal-box relative flex flex-col w-1/2 justify-evenly items-center'
				onSubmit={handleSubmit}>
				<label
					className='btn btn-sm btn-circle absolute right-2 top-2'
					onClick={toggleForm}>
					✕
				</label>
			</form>
		</div>
	);
}
