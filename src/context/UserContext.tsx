import { createContext, useState } from "react";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserData {
  token: string;
}

interface iProviderValue {}

export const UserContext = createContext({});

export const UserProvider = ({ children }: iUserContextProps) => {
  const [usarData, setUserData] = useState([] as iUserData[]);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
