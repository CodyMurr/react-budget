import { useContext } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import UserContext from '../context/UserContext';

export default function Profile() {
  const { user, changeDetails, toggleEditDetails } = useContext(UserContext);
  return (
    <div className='flex flex-col justify-center items-start w-full h-96 text-primary-content'>
      <h2 className='flex items-center text-3xl font-extrabold w-2/12 m-5'>
        Your Details&nbsp;&nbsp;&nbsp;&nbsp;
        <FaRegEdit
          className='cursor-pointer'
          size={25}
          onClick={toggleEditDetails}
        />
      </h2>
      <form className='flex flex-col items-center h-full w-full'>
        <label className='flex flex-col w-full text-xl font-bold m-5'>
          Name:
          <div className='flex w-full items-center justify-between'>
            <input
              className='input input-secondary w-full'
              type='text'
              name='name'
              disabled={!changeDetails}
              value={user.displayName}
            />
          </div>
        </label>
        <label className='flex flex-col w-full text-xl font-bold m-5'>
          Email:
          <div className='flex w-full items-center justify-between'>
            <input
              className='input input-secondary w-full'
              type='email'
              name='email'
              disabled={!changeDetails}
              value={user.email}
            />
          </div>
        </label>
      </form>
    </div>
  );
}
