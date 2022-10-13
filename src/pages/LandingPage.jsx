import React from 'react';
import CategoryList from '../components/CategoryList';

export default function LandingPage({ categories }) {
	return (
		<div className='w-11/12 h-full'>
			<CategoryList categories={categories} />
		</div>
	);
}
