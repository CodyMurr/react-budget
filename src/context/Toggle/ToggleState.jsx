import ToggleContext from './ToggleContext';

export default function ToggleState({ children }) {
	function toggleState(callback) {
		callback((prev) => !prev);
	}

	return (
		<ToggleContext.Provider value={{ toggleState }}>
			{children}
		</ToggleContext.Provider>
	);
}
