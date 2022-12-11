import BudgetForm from '../components/BudgetForm';
import BackButton from '../components/custom/BackButton';

export default function NewBudgetPage() {
	return (
		<main className='w-10/12 h-full flex flex-col items-center'>
			<BudgetForm />
			<BackButton />
		</main>
	);
}
