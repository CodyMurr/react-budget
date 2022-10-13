import React from 'react';
import SelectInput from './custom/SelectInput';

export default function SubCategoryList({ formData, category, handleChange }) {
	return (
		<SelectInput
			title='Category'
			formData={formData}
			optData={category.subcategories}
			defaultMsg='Select A Category...'
			handleChange={handleChange}
		/>
	);
}
