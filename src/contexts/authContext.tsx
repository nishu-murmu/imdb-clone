import React, { useContext, useState } from "react";
import { AuthContextProps, LayoutProps, UserProps } from "../utils/types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {  SignOutUser, userStateListener} from "../utils/firebase/firebase";
import {User} from 'firebase/auth'

const AuthContext = React.createContext<AuthContextProps>({
  signOut: () => {},
  signIn: () => {},
  register: () => {},
  currentUser: null,
});

const AuthProvider = ({children}: LayoutProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  const value = {
    currentUser,
    setCurrentUser,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthProvider, AuthContext };
