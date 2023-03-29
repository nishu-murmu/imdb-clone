import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = async (name: string, email: string, password: string) => {
  if (!email && !password) return;

  const result = await createUserWithEmailAndPassword(auth, email, password)
  if (auth.currentUser) {
    console.log(name, "string");
    await updateProfile(auth.currentUser, { displayName: name })
      .then(() => console.log("Updated Profile"))
      .catch((err) => console.log(err));
  }
  return result
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
export const SignOutUser = async () => await signOut(auth);
