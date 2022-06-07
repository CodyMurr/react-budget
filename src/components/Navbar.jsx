import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { capitalizeFirst } from '../utilities/helper';
import UserContext from '../context/UserContext';

export default function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav className='flex items-center w-full bg-base-200 h-20 shadow-md shadow-base-300'>
        <ul className='flex justify-evenly w-1/2 text-primary-content text-2xl font-extrabold'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
        <div className='flex w-1/2 justify-end items-center text-primary-content text-xl font-bold pr-5'>
          {user ? (
            <h4>Welcome, {capitalizeFirst(user.displayName)}!</h4>
          ) : (
            <Link to='/auth'>Login / Sign-up</Link>
          )}
        </div>
      </nav>
    </>
  );
}
