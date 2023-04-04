import React, { useContext, useState } from "react";
import { AuthContextProps, LayoutProps, UserProps } from "../types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  registerUser,
  SignOutUser,
  signInUser,
  userStateListener,
} from "../firebase/firebase";
import { User } from "firebase/auth";
import useLocaleStorage from "../customHooks/useLocaleStorage";

export const AuthContext = React.createContext<AuthContextProps>({
  signOut: () => {},
  signIn: async () => {},
  register: async () => {},
  currentUser: null,
});

export const AuthProvider = ({ children }: LayoutProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { getLocaleStorage, setLocaleStorage } = useLocaleStorage();

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
    setLocaleStorage("currentUser", "null")
    setLocaleStorage("selectedItems", JSON.stringify([]))
    navigate("/");
  };

  const signIn = ({ email, password }: UserProps) => {
    navigate("/");
    return signInUser(email, password);
  };

  const register = ({name, email, password }: UserProps) => {
    navigate("/");
    return registerUser(name,email, password);
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
