import { useState, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';

export default function SignUp() {
  const { showPassword, formData, setShowPassword, handleChange, navigate } =
    useContext(AuthContext);
  const { name, email, password } = formData;

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
    }
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <div>
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
