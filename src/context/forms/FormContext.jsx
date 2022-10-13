import { createContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
	const [formData, setFormData] = useState({});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}
	return (
		<FormContext.Provider value={{ formData, handleChange }}>
			{children}
		</FormContext.Provider>
	);
}

export default FormContext;
