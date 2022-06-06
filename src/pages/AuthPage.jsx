import { useState } from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { AuthProvider } from '../context/AuthContext';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <AuthProvider>{showLogin ? <SignIn /> : <SignUp />}</AuthProvider>
    </div>
  );
}
