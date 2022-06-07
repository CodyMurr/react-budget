import { useState, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import UserContext from '../context/UserContext';

export default function BudgetForm({ toggleForm }) {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    user,
    expenses: [
      {
        budgetRef: '',
        name: '',
        amountDue: null,
        dueDate: null,
        isPaid: false,
        payableTo: '',
      },
    ],
    totalAmount: null,
    startDate: null,
    endDate: null,
  });
  //   console.log(user);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form className='form-control flex flex-col items-center w-1/3'>
        <h2 className='text-2xl font-bold text-secondary'>New Budget</h2>
        <input
          type='text'
          name='totalAmount'
          className='input input-ghost shadow-md w-full'
          placeholder='Amount'
          onChange={handleChange}
        />

        <input
          type='date'
          name='startDate'
          className='input input-ghost shadow-md w-full'
          placeholder='Start Date'
          onChange={handleChange}
        />
        <input
          type='date'
          name='endDate'
          className='input input-ghost shadow-md w-full'
          placeholder='End Date'
          onChange={handleChange}
        />
        <div className='flex justify-between w-full'>
          <button className='btn btn-primary w-1/2' type='submit'>
            Save
          </button>
          <button className='btn btn-error w-1/2' onClick={toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
