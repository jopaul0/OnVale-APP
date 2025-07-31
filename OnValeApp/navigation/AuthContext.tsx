//REACT
import React, { createContext, useContext, useState } from 'react';

//TYPES
export type UserType = 'client' | 'admin' | null;
export type AuthContextType = {
  isLoggedIn: boolean;
  userType: UserType;
  login: (type: UserType) => void;
  logout: () => void;
};

//CONTEXT
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//FUNCTIONS
export function AuthProvider({ children }: { children: React.ReactNode }) {

  //STATE
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userType, setUserType] = useState<UserType>('admin');

  //FUNCTIONS
  const login = (type: UserType) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  //JSX
  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
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
