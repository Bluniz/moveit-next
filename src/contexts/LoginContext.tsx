import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

interface UserProps {
  email: string | any;
  image: string | any;
  name: string | any;
}

interface ProviderProps {
  user: UserProps;
  logged: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const LogInContext = createContext({} as ProviderProps);

interface LogInProviderProps {
  children: ReactNode;
}

export function LogInProvider({ children }: LogInProviderProps) {
  const [session] = useSession();
  const [user, setUser] = useState({ name: null, image: null, email: null });
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (session !== undefined && session?.user) {
      console.log(session);
      console.log(session.user);
      setUser(session.user);
      setLogged(true);
    } else {
      console.log(false);
      console.log({});
      setLogged(false);
      setUser({});
    }
  }, [session]);

  function logIn() {
    signIn();
  }

  function logOut() {
    signOut();
    setLogged(false);
    setUser({});
  }

  return (
    <LogInContext.Provider
      value={{
        user,
        logged,
        logIn,
        logOut,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
}
