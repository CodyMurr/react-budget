import { Link, useNavigate } from 'react-router-dom';
import {
	BsFillHouseDoorFill,
	BsBank2,
	BsWindowSidebar,
	BsGearFill,
	BsFillPersonFill,
} from 'react-icons/bs';
import * as userService from '../utilities/users-service';
import NavItem from './custom/NavItem';
import ThemeToggle from './custom/ThemeToggle';

export default function NavBar({ user, setUser, theme, setTheme }) {
	const navigate = useNavigate();

	function handleLogout() {
		userService.logOut();
		setUser(null);
		navigate('/');
	}

	return (
		<div className='mt-0 flex w-1/12 h-screen bg-secondary'>
			<nav className='flex flex-col w-full justify-evenly'>
				<ul className='w-full h-1/2 flex flex-col justify-between items-center pt-3'>
					<NavItem
						link='/home'
						icon={<BsFillHouseDoorFill size={30} />}
						text='Overview'
					/>
					<NavItem
						link='/budgets'
						icon={<BsWindowSidebar size={30} />}
						text='Budgets'
					/>

					<NavItem link='/' icon={<BsBank2 size={30} />} text='Accounts' />

					<NavItem link='/' icon={<BsGearFill size={30} />} text='Settings' />

					<NavItem
						link='/profile'
						icon={<BsFillPersonFill size={30} />}
						text='profile'
					/>
				</ul>

				<section className='w-full h-1/2 flex flex-col justify-end items-center'>
					{user && (
						<Link
							className='text-secondary-content border-b-2 border-b-secondary-content border-t-2 border-t-secondary-content font-bold w-full h-1/5 flex items-center justify-center'
							to=''
							onClick={handleLogout}>
							Log Out
						</Link>
					)}
					<span className='text-secondary-content border-b-2 border-b-secondary-content font-bold w-full h-1/5 flex flex-col items-center justify-evenly'>
						<ThemeToggle theme={theme} setTheme={setTheme} />
						<p>Theme</p>
					</span>
				</section>
			</nav>
		</div>
	);
}
