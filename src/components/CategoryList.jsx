import SelectInput from './custom/SelectInput';

export default function CategoryList({ categories, formData, handleChange }) {
	return (
		<SelectInput
			title='Category'
			formData={formData}
			optData={categories}
			defaultMsg='Select A Category...'
			handleChange={handleChange}
		/>
	);
}
