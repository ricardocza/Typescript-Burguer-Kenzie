import { useForm, SubmitHandler } from "react-hook-form";
import { Form, iSubmitHandler } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledLoginPage } from "./style";
import logo from "../../imgs/logo.png";
import loginicon from "../../imgs/loginicon.png";
import { ButtonGrey, ButtonPrimary } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export interface iFormLogin {
  name: string;
  password: string;
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<iFormLogin>();
  const navigate = useNavigate();

  const submitLogin: SubmitHandler<iFormLogin> = (data) => {
    console.log(data);
    navigate("/home");
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
          label="Nome"
          placeholder="Nome"
          type={"text"}
          showButton={false}
          register={register("name")}
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
