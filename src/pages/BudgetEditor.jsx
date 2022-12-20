import { useState, useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import BudgetContext from '../context/Budgets/BudgetContext';
import ActionBtns from '../components/custom/ActionBtns';
import FormInput from '../components/custom/FormInput';
import BackButton from '../components/custom/BackButton';
import PageHeader from '../components/custom/PageHeader';

export default function BudgetEditor() {
	const { showBudget, routeChange, updateBudget, deleteBudget } =
		useContext(BudgetContext);

	const [formData, setFormData] = useState({});
	const [error, setError] = useState('');
	const [budget, setBudget] = useState({});

	const isMounted = useRef(true);

	const { id } = useParams();

	useEffect(() => {
		function setData(newData) {
			setFormData(newData);
		}
		if (isMounted.current) {
			showBudget(id, setBudget);
			setData(budget);
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
		<main className='w-10/12 flex flex-col items-center relative'>
			<PageHeader text='Edit ' keyWord={budget.category} />

			<form
				className='relative flex flex-col w-full h-3/5 items-center justify-center bg-base-300 shadow-2xl rounded-lg'
				onSubmit={handleUpdate}>
				<FormInput
					title='Category'
					formData={formData}
					handleChange={handleChange}
					isDisabled={true}
				/>
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
			<BackButton />
			<p className='text-lg text-error'>{error}</p>
		</main>
	);
}
