import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth,googleProvider } from '../configs/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../configs/firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = userCredential.user;
    await updateFirestoreUser({...newUser, displayName: name});  // Create a new user document in Firestore
    return newUser;
  };

  const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const loggedInUser = userCredential.user;
    await updateFirestoreUser(loggedInUser);  // Check or update user document in Firestore
    return loggedInUser;
  };

   const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const newUser = result.user;
      await updateFirestoreUser(newUser);  // Check or update user document in Firestore
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
      return signOut(auth)
  }

  const updateFirestoreUser = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {

      await setDoc(userRef, {
        email: user.email,
        name: user.displayName,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        updateFirestoreUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn,signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};