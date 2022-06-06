import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        showPassword,
        formData,
        setShowPassword,
        handleChange,
        navigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
