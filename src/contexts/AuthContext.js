import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.utils";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password, displayName, confirmPassword) {
    return auth.createUserWithEmailAndPassword(
      email,
      password,
      displayName,
      confirmPassword
    );
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });
  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
