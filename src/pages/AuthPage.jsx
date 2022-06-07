import { useState } from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function toggleLogin() {
    setShowLogin(!showLogin);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className='w-full flex justify-evenly relative min-h-screen'>
      {showLogin ? (
        <SignIn
          showPassword={showPassword}
          toggleLogin={toggleLogin}
          togglePassword={togglePassword}
        />
      ) : (
        <SignUp
          showPassword={showPassword}
          toggleLogin={toggleLogin}
          togglePassword={togglePassword}
        />
      )}
    </div>
  );
}
