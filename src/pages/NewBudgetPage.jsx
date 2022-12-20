import BudgetForm from '../components/BudgetForm';
import BackButton from '../components/custom/BackButton';
import PageHeader from '../components/custom/PageHeader';

export default function NewBudgetPage() {
	return (
		<main className='w-10/12 h-full flex flex-col items-center'>
			<PageHeader text='New Budget' keyWord={null} />
			<BudgetForm />
			<BackButton />
		</main>
	);
}
