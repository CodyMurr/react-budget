import Category from './Category';

export default function CategoryList({ categories, value, handleChange }) {
	const cats = categories.map((c) => (
		<optgroup label={c.name} key={c._id}>
			{c.subcategories.map((s) => (
				<Category parent={c.name} name={s.name} key={s._id} />
			))}
		</optgroup>
	));
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
