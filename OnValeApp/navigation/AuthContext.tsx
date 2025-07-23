//REACT
import React, { createContext, useContext, useState } from 'react';

//TYPE
export type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

//CONTEXT
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//FUNCTIONS
export function AuthProvider({ children }: { children: React.ReactNode }) {

  //STATE
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //FUNCTIONS
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  //JSX
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

//HOOK
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
