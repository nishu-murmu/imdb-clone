import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = async (email: string, password: string) => {
  if (!email && !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
export const SignOutUser = async () => await signOut(auth);
