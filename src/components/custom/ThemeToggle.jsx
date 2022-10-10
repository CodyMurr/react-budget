import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle({ theme, setTheme }) {
	function toggleTheme() {
		setTheme((theme * -1).toString());
	}

	return (
		<label className='swap flex justify-center items-center w-28 h-1/2 relative'>
			<input type='checkbox' />
			<FaSun
				size={30}
				className='swap-on text-primary absolute bottom-5'
				onClick={toggleTheme}
			/>
			<FaMoon
				size={30}
				className='swap-off text-accent absolute bottom-5'
				onClick={toggleTheme}
			/>
		</label>
	);
}
