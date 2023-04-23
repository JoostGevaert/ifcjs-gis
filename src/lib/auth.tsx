import { createContext, useContext, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebaseClient";

const auth = getAuth(firebaseApp);

export const authContext = createContext<
  [User | null, (user: User | null) => void]
>([null, () => {}]);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser !== null) {
        setUser({...firebaseUser});
      } else { 
        setUser(null); 
      }
    });
  }, []);

  return (
    <authContext.Provider value={[user, setUser]}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}
