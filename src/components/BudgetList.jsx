import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import BudgetForm from './BudgetForm';

export default function BudgetList() {
  const [showBudgetForm, setShowBudgetForm] = useState(false);
  function toggleForm() {
    setShowBudgetForm(!showBudgetForm);
  }
  return (
    <div className='w-full'>
      <div
        className='flex justify-evenly items-center w-1/6 h-12 pr-2 hover:text-primary hover:cursor-pointer'
        onClick={toggleForm}
      >
        <FaPlus size={20} />
        <h3 className='text-lg font-semibold'>Add New Budget</h3>
      </div>
      {showBudgetForm && <BudgetForm toggleForm={toggleForm} />}
    </div>
  );
}
