import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function initializeUser(value) {
    setUser(value);
  }

  return (
    <UserContext.Provider value={{ user, initializeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
