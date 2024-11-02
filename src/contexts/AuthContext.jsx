import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signin = () => {
    signInWithPopup(auth, provider).then((data) => {
      if(data?.user) setUser(data.user);
    });
  }

  const signout = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
        setUser(currentUser);
        setLoading(false);
    });

    return unsubscribe;
  }, [])

  const value = { user, loading, signin, signout };

  return <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>;
};
