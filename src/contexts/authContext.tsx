import React, { useContext, useState } from "react";
import { AuthContextProps, LayoutProps, UserProps } from "../utils/types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  registerUser,
  SignOutUser,
  signInUser,
  userStateListener,
} from "../utils/firebase/firebase";
import { User } from "firebase/auth";

export const AuthContext = React.createContext<AuthContextProps>({
  signOut: () => {},
  signIn: async ({ email, password }: UserProps) => {},
  register: async ({ email, password }: UserProps) => {},

  currentUser: null,
});

export const AuthProvider = ({ children }: LayoutProps) => {
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

  const signIn = ({ email, password }: UserProps) => {
    signInUser(email, password);
  };

  const register = ({ email, password }: UserProps) => {
    registerUser(email, password);
  };

  const value = {
    currentUser,
    setCurrentUser,
    signOut,
    signIn,
    register,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
