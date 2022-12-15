import { useForm, SubmitHandler } from "react-hook-form";
import { Form, iSubmitHandler } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledRegistrerPage } from "./style";
import logo from "../../imgs/logo.png";
import loginicon from "../../imgs/loginicon.png";
import { ButtonGrey, ButtonPrimary } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export interface iFormLogin {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<iFormLogin>();
  const navigate = useNavigate();

  const submitLogin: SubmitHandler<iFormLogin> = (data) => {
    console.log(data);
  };

  return (
    <StyledRegistrerPage>
      <img src={logo} alt="" />
      <div>
        <h3>Cadastro</h3>
        <Link to={"/"}>Retornar para o login</Link>
      </div>
      <Form onSubmit={handleSubmit(submitLogin)}>
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
