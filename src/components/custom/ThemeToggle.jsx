import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle(props) {
	return (
		<div className=' flex justify-between items-center w-28'>
			<FaMoon size={25} className='text-accent' />
			<span
				className={`flex rounded-full border-4 border-secondary-content w-12 h-7 items-center p-1 cursor-pointer ${
					props.theme >= 1 ? 'justify-end' : 'justify-start'
				}`}
				onClick={props.toggle}>
				<span className='rounded-full w-4 h-4 bg-secondary-content'></span>
			</span>
			<FaSun size={25} className='text-primary' />
		</div>
	);
}
