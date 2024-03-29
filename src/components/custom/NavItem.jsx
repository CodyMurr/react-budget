import { Link } from 'react-router-dom';

export default function NavItem({
	link,
	icon,
	text,
	activePath,
	handlePathChange,
}) {
	return (
		<li
			className={`text-primary-content w-full h-1/4 flex flex-col items-center ${
				link === activePath ? 'bg-secondary-focus' : null
			}`}
			onClick={() => handlePathChange(link)}>
			<Link
				to={link}
				className='w-full h-full flex flex-col justify-evenly items-center '>
				{icon}
				<p>{text}</p>
			</Link>
		</li>
	);
}
