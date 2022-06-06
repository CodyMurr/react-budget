import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AuthContext from '../context/AuthContext';

import React from 'react';

export default function SignIn() {
  const { showPassword, formData, setShowPassword, handleChange, navigate } =
    useContext(AuthContext);
  const { email, password } = formData;

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
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad User Credentials');
    }
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
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
          <button type='submit'>Sign In</button>
        </form>
      </div>
    </>
  );
}
