import { User } from "firebase/auth";
import { createContext, useContext, useState } from "react";

export const authContext = createContext<
  [User | null, (user: User | null) => void]
>([null, () => {}]);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <authContext.Provider value={[user, setUser]}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}
