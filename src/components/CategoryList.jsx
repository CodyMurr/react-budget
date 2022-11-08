import Category from './Category';

export default function CategoryList({ categories, value, handleChange }) {
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

CategoryList.defaultProps = {
	value: '',
};
