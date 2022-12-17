import { useForm, SubmitHandler } from "react-hook-form";
import { Form, iSubmitHandler } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledRegistrerPage } from "./style";
import logo from "../../imgs/logo.png";
import loginicon from "../../imgs/loginicon.png";
import { ButtonGrey, ButtonPrimary } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Header } from "../../components/Header";

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {
  const { requestNewUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iFormRegister>();
  const navigate = useNavigate();

  const submitLogin: SubmitHandler<iFormRegister> = (data) => {
    const { confirmPassword: _, ...rest } = data;
    requestNewUser(rest);
  };

  return (
    <StyledRegistrerPage>
      <Header />
      <Form onSubmit={handleSubmit(submitLogin)}>
        <div>
          <h1>Cadastro</h1>
          <Link to={"/"}>Retornar para o login</Link>
        </div>
        <Input
          label="Nome"
          placeholder="Nome"
          type={"text"}
          showButton={false}
          register={register("name")}
        />
        <Input
          label="Email"
          placeholder="Email"
          type={"email"}
          showButton={false}
          register={register("email")}
        />
        <Input
          label="Senha"
          placeholder="Senha"
          type={"password"}
          showButton={false}
          register={register("password")}
        />
        <Input
          label="Confirmar Senha"
          placeholder="Confirmar Senha"
          type={"password"}
          showButton={false}
          register={register("confirmPassword")}
        />
        <ButtonGrey type="submit" text="Cadastrar" />
      </Form>
    </StyledRegistrerPage>
  );
};
