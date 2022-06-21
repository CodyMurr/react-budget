import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { capitalizeFirst } from '../utilities/helper';
import { FaUserCircle } from 'react-icons/fa';
import UserContext from '../context/UserContext';

export default function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav className='flex items-center w-full bg-primary h-20 shadow-md shadow-base-300'>
        <ul className='flex justify-between w-1/2 ml-5 text-primary-content text-2xl font-extrabold'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/settings'>
            <li>Settings</li>
          </Link>
        </ul>
        <div className='flex flex-col w-1/2 justify-center items-end text-primary-content text-xl font-bold pr-5'>
          {user ? (
            <Link
              to='/profile'
              className='flex flex-col w-1/4 h-full justify-between items-center'
            >
              <FaUserCircle size={30} />
              <p>{user.displayName}</p>
            </Link>
          ) : (
            <Link to='/sign-in'>Login / Sign-up</Link>
          )}
        </div>
      </nav>
    </>
  );
}
