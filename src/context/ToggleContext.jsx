import { createContext } from 'react';

const ToggleContext = createContext();

export function ToggleProvider({ children }) {
	function toggleState(callback) {
		callback((prev) => !prev);
	}

	return (
		<ToggleContext.Provider value={{ toggleState }}>
			{children}
		</ToggleContext.Provider>
	);
}

export default ToggleContext;
