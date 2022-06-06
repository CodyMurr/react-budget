import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/');
    } catch (error) {
      console.log(error);
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
            onChange={onChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
          <div>
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
