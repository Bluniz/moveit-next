import { createContext, ReactNode, useCallback, FormEvent } from "react";
import { signIn, signOut, Provider } from "next-auth/client";

interface UserProps {
  email: string | any;
  image: string | any;
  name: string | any;
}

interface ProviderProps {
  logIn: (event: FormEvent) => void;
  logOut: (event: FormEvent) => void;
}

export const AuthContext = createContext({} as ProviderProps);

interface LogInProviderProps {
  children: ReactNode;
  session: any;
}

export function AuthProvider({ children, session }: LogInProviderProps) {
  const logIn = useCallback((event: FormEvent) => {
    event.preventDefault();
    signIn("github", {
      callbackUrl: "http://localhost:3000/home",
    });
  }, []);

  const logOut = useCallback((event: FormEvent) => {
    event.preventDefault();
    signOut({ callbackUrl: "http:localhost:3000/" });
  }, []);

  return (
    <Provider session={session}>
      <AuthContext.Provider
        value={{
          logIn,
          logOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    </Provider>
  );
}
