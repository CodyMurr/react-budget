import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [changeDetails, setChangeDetails] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function initializeUser(value) {
    setUser(value);
  }

  function toggleEditDetails() {
    setChangeDetails(!changeDetails);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        changeDetails,
        showPassword,
        initializeUser,
        toggleEditDetails,
        togglePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
