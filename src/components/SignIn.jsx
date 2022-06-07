import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import UserContext from '../context/UserContext';

import React from 'react';

export default function SignIn({ showPassword, toggleLogin, togglePassword }) {
  const { initializeUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        initializeUser({ ...userCredential.user });
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad User Credentials');
    }
  }
  return (
    <div className='flex flex-col items-center w-1/3 mt-5 p-5 absolute top-1/4'>
      <h2 className='text-3xl text-primary-content font-bold'>Welcome Back!</h2>
      <form
        className='flex flex-col items-center w-full text-primary-content p-7'
        onSubmit={handleSubmit}
      >
        <label className='flex flex-col mt-4 font-semibold text-lg w-4/5'>
          Email
          <input
            type='text'
            className='h-10 rounded border-solid border-2 focus:scale-105 duration-500'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className='flex flex-col mt-4 font-semibold text-lg w-4/5'>
          Password
          <input
            type={showPassword ? 'text' : 'password'}
            className='h-10 rounded border-solid border-2 focus:scale-105 duration-500'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className='flex flex-col justify-evenly items-center w-full h-56 mt-5'>
          <button className='btn btn-secondary w-4/5 text-lg' type='submit'>
            Sign In
          </button>
          <Link to='/forgot-password' className='w-3/5 text-center'>
            <p className='italic text-2xl cursor-pointer hover:underline hover:text-primary'>
              Forgot password?
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
