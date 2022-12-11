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

export default function NavBar({ setUser }) {
	const navigate = useNavigate();

	function handleLogout() {
		userService.logOut();
		setUser(null);
		navigate('/');
	}

	return (
		<div className='mt-0 flex w-2/12 h-screen bg-secondary'>
			<nav className='flex flex-col w-full justify-evenly'>
				<ul className='w-full h-1/2 flex flex-col justify-between items-center'>
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
					<Link
						className='text-primary-content w-full h-1/4 flex flex-col items-center justify-center hover:bg-secondary-focus'
						to=''
						onClick={handleLogout}>
						Log Out
					</Link>
				</section>
			</nav>
		</div>
	);
}
