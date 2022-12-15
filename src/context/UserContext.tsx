import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iFormLogin } from "../pages/Login";
import { api } from "../services/api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  requestLogin: (data: iFormLogin) => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const requestLogin = async (data: iFormLogin) => {
    try {
      const response = await api.post("/login", data);
      setUserData(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      navigate("/home");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ requestLogin }}>
      {children}
    </UserContext.Provider>
  );
};
