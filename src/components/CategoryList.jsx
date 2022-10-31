import { useContext } from 'react';
import Category from './Category';
import BudgetContext from '../context/Budgets/BudgetContext';

export default function CategoryList({ value, handleChange }) {
	const { categories } = useContext(BudgetContext);
	const cats = categories.map((c) => <Category name={c.name} key={c._id} />);
	return (
		<select
			className='input input-primary rounded-md w-full'
			name='category'
			value={value}
			onChange={handleChange}>
			<option value={null}>Choose A Category</option>
			{cats}
		</select>
	);
}
