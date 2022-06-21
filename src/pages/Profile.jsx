import { useContext } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import UserContext from '../context/UserContext';

export default function Profile() {
  const { user, changeDetails, toggleEditDetails } = useContext(UserContext);
  return (
    <div className='flex flex-col justify-center items-start w-full h-96 text-primary-content'>
      <h2 className='flex justify-between text-3xl font-extrabold w-2/12 my-5 mx-5'>
        Your Details <FaRegEdit size={25} />
      </h2>
      <form className='flex flex-col items-start h-full w-full'>
        <label className='flex flex-col w-1/2 text-xl font-bold my-5 mx-5'>
          Name:
          <div className='flex w-full items-center justify-between'>
            <input
              className='input input-secondary w-4/5'
              type='text'
              name='name'
              disabled={!changeDetails}
              value={user.displayName}
            />
          </div>
        </label>
        <label className='flex flex-col w-1/2 text-xl font-bold my-5 mx-5'>
          Email:
          <div className='flex w-full items-center justify-between'>
            <input
              className='input input-secondary w-4/5'
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
