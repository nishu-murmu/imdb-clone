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
  signIn: async () => {},
  register: async () => {},
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
    window.localStorage.setItem("currentUser", "null")
    window.localStorage.setItem("selectedItems", JSON.stringify([])) 
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
