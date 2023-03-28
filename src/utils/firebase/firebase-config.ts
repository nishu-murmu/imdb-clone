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

const firebaseConfig = {
  apiKey: "AIzaSyDa461OEOc9hr1JIEY3TSUTaGXm7u52lMg",
  authDomain: "imdb-auth-dev.firebaseapp.com",
  projectId: "imdb-auth-dev",
  storageBucket: "imdb-auth-dev.appspot.com",
  messagingSenderId: "667126090187",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = async (email: string, password: string) => {
  if (!email &&!password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
export const SignOutUser = async () => await signOut(auth);
