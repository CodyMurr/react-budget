import { useState, useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { showBudgetDetail } from '../utilities/budgets-api';
import { FaTrashAlt } from 'react-icons/fa';
import BudgetContext from '../context/Budgets/BudgetContext';
import ActionBtns from '../components/custom/ActionBtns';
import FormInput from '../components/custom/FormInput';

export default function BudgetEditor() {
	const { routeChange, updateBudget, deleteBudget } = useContext(BudgetContext);

	const [formData, setFormData] = useState({});
	const [error, setError] = useState('');
	const [budget, setBudget] = useState({});

	const isMounted = useRef(true);

	const { id } = useParams();

	useEffect(() => {
		async function showBudget() {
			const budget = await showBudgetDetail(id);
			setBudget(budget);
			setFormData(budget);
		}
		if (isMounted.current) {
			showBudget();
		}

		return () => (isMounted.current = false);
	}, []);

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	async function handleUpdate(e) {
		e.preventDefault();
		try {
			await updateBudget(budget._id, formData);

			routeChange('/budgets');
		} catch (err) {
			setError(err);
		}
	}

	function handleDelete() {
		try {
			deleteBudget(budget._id);
			routeChange('/budgets');
		} catch (error) {
			setError(error);
		}
	}

	return (
		<>
			<form
				className='relative flex flex-col w-full h-2/5 items-center bg-base-300 shadow-2xl rounded-lg'
				onSubmit={handleUpdate}>
				<header className='text-primary font-extrabold w-full h-24 flex items-center justify-between p-5 border-b-2'>
					<h1 className='text-4xl text-secondary-content'>
						Edit Budget For{' '}
						<span className=' text-primary'>{budget.category}</span>
					</h1>
				</header>

				<FormInput
					title='Amount'
					type='number'
					formData={formData}
					handleChange={handleChange}
				/>

				<section className='flex justify-between items-center w-3/4 h-32'>
					<ActionBtns handleCancel={routeChange} />
					<button
						className='btn btn-ghost text-error-content rounded text-md'
						onClick={handleDelete}>
						<FaTrashAlt size={20} />
						&nbsp;Delete Budget
					</button>
				</section>
			</form>
			<p className='text-lg text-error'>{error}</p>
		</>
	);
}
