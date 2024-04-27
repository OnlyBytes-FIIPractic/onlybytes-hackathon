import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider, db } from '../configs/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = { ...userCredential.user, displayName: name };
    await setOrUpdateUser(newUser);  // Create a new user document in Firestore and update context state
    return newUser;
  };

  const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await setOrUpdateUser(userCredential.user);  // Update context state
    return userCredential.user;
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await setOrUpdateUser(result.user);  // Update context state
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);  // Reset the user state to null on logout
  };

  const setOrUpdateUser = async (firebaseUser) => {
    const userRef = doc(db, "users", firebaseUser.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email: firebaseUser.email,
        name: firebaseUser.displayName || '',  // Set name if available
      });
    }

    // Retrieve the document again in case it was just created
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();

    // Merge Firestore data with Firebase Auth data
    setUser({
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: userData.name
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setOrUpdateUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};