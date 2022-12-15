import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iFormLogin } from "../pages/Login";
import { api } from "../services/api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iFormRegister {
  name: string;
  email: string;
  password: string;
}

interface iUserContext {
  requestLogin: (data: iFormLogin) => void;
  checkToken: (token: string) => void;
  requestNewUser: (data: iFormRegister) => void;
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

  const checkToken = async (token: string) => {};

  const requestNewUser = async (data: iFormRegister) => {
    try {
      const response = await api.post("/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ requestLogin, checkToken, requestNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
