import { useForm, SubmitHandler } from "react-hook-form";
import { Form, iSubmitHandler } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledLoginPage } from "./style";
import logo from "../../imgs/logo.png";
import loginicon from "../../imgs/loginicon.png";
import { ButtonGrey, ButtonPrimary } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export interface iFormLogin {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { requestLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iFormLogin>();
  const navigate = useNavigate();

  const submitLogin: SubmitHandler<iFormLogin> = async (data) => {
    console.log(data);
    requestLogin(data);
  };

  return (
    <StyledLoginPage>
      <img src={logo} alt="" />
      <div>
        <figure>
          <img src={loginicon} alt="" />
        </figure>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </div>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <Input
          label="Email"
          placeholder="Email"
          type={"text"}
          showButton={false}
          register={register("email")}
        />
        <Input
          label="Senha"
          placeholder="Nome"
          type={"password"}
          showButton={false}
          register={register("password")}
        />
        <ButtonPrimary type="submit" text="Logar" />
      </Form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <Link to={"/register"}>
        <ButtonGrey type="button" text="Cadastrar" />
      </Link>
    </StyledLoginPage>
  );
};
