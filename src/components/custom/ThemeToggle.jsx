import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle({ theme, setTheme }) {
	function toggleTheme() {
		setTheme((theme * -1).toString());
	}

	return (
		<label className='swap flex justify-center items-center w-28 h-1/2 relative'>
			<input type='checkbox' />
			<FaMoon
				size={40}
				className='swap-on text-accent absolute bottom-5'
				onClick={toggleTheme}
			/>
			<FaSun
				size={40}
				className='swap-off text-primary absolute bottom-5'
				onClick={toggleTheme}
			/>
		</label>
	);
}
