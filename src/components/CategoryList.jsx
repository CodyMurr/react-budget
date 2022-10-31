import React from 'react';
import Category from './Category';

export default function CategoryList({ categories, handleChange }) {
	const cats = categories.map((c) => <Category name={c.name} key={c._id} />);
	return (
		<select
			className='input input-primary rounded-md w-full'
			name='category'
			onChange={handleChange}>
			<option value={null}>Choose A Category</option>
			{cats}
		</select>
	);
}
