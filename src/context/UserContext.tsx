import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    const id = toast.loading("Cadastrando novo usuário...");

    try {
      const response = await api.post("/login", data);
      setUserData(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.update(id, {
        render: "Login realizado com sucesso!",
        type: "success",
        isLoading: false,
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.update(id, {
          render: error.response.data,
          type: "error",
          isLoading: false,
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const checkToken = async (token: string) => {};

  const requestNewUser = async (data: iFormRegister) => {
    const id = toast.loading("Cadastrando novo usuário...");
    try {
      const response = await api.post("/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.update(id, {
        render: "Cadastro realizado com sucesso!",
        type: "success",
        isLoading: false,
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.update(id, {
          render: error.response.data,
          type: "error",
          isLoading: false,
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <UserContext.Provider value={{ requestLogin, checkToken, requestNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
