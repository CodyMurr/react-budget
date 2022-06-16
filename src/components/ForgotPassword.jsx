import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email Sent');
      navigate('/auth');
    } catch (error) {
      toast.error('Failed to send...');
    }
  }

  return (
    <div className='flex flex-col w-full h-screen'>
      <header className='w-full flex justify-center'>
        <h2 className='text-2xl font-bold'>Forgot Password</h2>
      </header>
      <main className='w-full h-1/2 flex justify-center'>
        <form
          className='w-1/2 h-full flex flex-col items-center justify-evenly'
          onSubmit={onSubmit}
        >
          <div className='flex w-full justify-evenly'>
            <input
              className='input input-primary w-1/3'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
            />
            <button className='btn btn-primary' type='submit'>
              Send Reset Link
            </button>
          </div>
          <Link
            className='text-xl hover:text-secondary hover:underline'
            to='/auth'
          >
            Sign In
          </Link>
        </form>
      </main>
    </div>
  );
}
