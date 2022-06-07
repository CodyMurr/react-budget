import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';

export default function SignUp({ showPassword, toggleLogin, togglePassword }) {
  const { initializeUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      initializeUser({ ...user });
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong :(');
      console.log(error);
    }
  }
  return (
    <div className='flex flex-col items-center w-1/3 mt-5 p-5 absolute top-1/4'>
      <h2 className='text-3xl text-primary-content font-bold'>Sign Up</h2>
      <form
        className='flex flex-col items-center w-full text-primary-content p-7'
        onSubmit={onSubmit}
      >
        <label className='flex flex-col mt-4 font-semibold text-lg w-4/5'>
          Name
          <input
            type='text'
            className='h-10 rounded border-solid border-2 focus:scale-105 duration-500'
            name='name'
            value={name}
            autoComplete='off'
            onChange={handleChange}
          />
        </label>
        <label className='flex flex-col mt-4 font-semibold text-lg w-4/5'>
          Email
          <input
            type='email'
            className='h-10 rounded border-solid border-2 focus:border-primary focus:scale-105 duration-500'
            name='email'
            value={email}
            autoComplete='off'
            onChange={handleChange}
          />
        </label>
        <label className='flex flex-col mt-4 font-semibold text-lg w-4/5'>
          Password
          <input
            type={showPassword ? 'text' : 'password'}
            className='h-10 rounded border-solid border-2 focus:border-primary focus:scale-105 duration-500'
            name='password'
            value={password}
            autoComplete='off'
            onChange={handleChange}
          />
        </label>
        <div className='flex flex-col justify-evenly items-center w-full h-56 mt-5'>
          <button className='btn btn-secondary w-4/5 text-lg' type='submit'>
            Sign Up
          </button>
          <p
            className='italic text-2xl cursor-pointer hover:underline hover:text-primary'
            onClick={toggleLogin}
          >
            Already a member?
          </p>
        </div>
      </form>
    </div>
  );
}
