import { createContext, useState } from 'react';

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
	const [activeBudget, setActiveBudget] = useState(null);
	return (
		<BudgetContext.Provider value={{ activeBudget, setActiveBudget }}>
			{children}
		</BudgetContext.Provider>
	);
}

export default BudgetContext;
