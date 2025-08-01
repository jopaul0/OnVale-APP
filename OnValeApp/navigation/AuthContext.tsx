import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//TYPES
export type UserType = 'companies' | 'admins' | null;
export type AuthContextType = {
  isLoggedIn: boolean;
  userType: UserType;
  login: (type: UserType, token: string) => Promise<void>;
  logout: () => Promise<void>;
};

//CONTEXT
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//FUNCTIONS
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);

  const login = async (type: UserType, token: string) => {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user_type', type || '');
    setIsLoggedIn(true);
    setUserType(type);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user_type');
    setIsLoggedIn(false);
    setUserType(null);
  };

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
