import { Link, useNavigate } from 'react-router-dom';
import {
	BsFillHouseDoorFill,
	BsBank2,
	BsWindowSidebar,
	BsGearFill,
} from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import * as userService from '../utilities/users-service';
import ThemeToggle from './custom/ThemeToggle';

export default function NavBar({ user, setUser, setTheme }) {
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
					<li className='text-secondary-content border-b-2 border-b-secondary-content w-full h-1/4 flex flex-col items-center'>
						<Link
							to='/home'
							className='w-full h-full flex justify-center items-center'>
							<BsFillHouseDoorFill size={30} />
						</Link>
					</li>
					<li className='text-secondary-content border-b-2 border-b-secondary-content w-full h-1/4'>
						<Link
							to='/budgets'
							className='w-full h-full flex flex-col justify-evenly items-center'>
							<BsWindowSidebar size={30} />
							<p>Budgets</p>
						</Link>
					</li>
					<li className='text-secondary-content border-b-2 border-b-secondary-content w-full h-1/4'>
						<Link
							to='/'
							className='w-full h-full flex flex-col justify-evenly items-center'>
							<BsBank2 size={30} />
							<p>Accounts</p>
						</Link>
					</li>

					<li className='text-secondary-content border-b-2 border-b-secondary-content w-full h-1/4'>
						<Link
							to=''
							className='w-full h-full flex flex-col justify-evenly items-center'>
							<BsGearFill size={30} />
							<p>Settings</p>
						</Link>
					</li>
					<li className='text-secondary-content border-b-2 border-b-secondary-content w-full h-1/4'>
						<Link
							to={user && '/profile'}
							className='w-full h-4/5 flex flex-col justify-center items-center text-secondary-content'>
							<BiUserCircle className='text-secondary-content' size={50} />
						</Link>
						<p className='text-secondary-content w-full text-center'>
							{user && (
								<Link onClick={handleLogout} to=''>
									Log Out
								</Link>
							)}
						</p>
					</li>
				</ul>

				<section className='w-full h-1/2 flex flex-col justify-end items-center pb-3'>
					<ThemeToggle setTheme={setTheme} />
				</section>
			</nav>
		</div>
	);
}
