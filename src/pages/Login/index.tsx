import { useForm, SubmitHandler } from "react-hook-form";
import { Form, iSubmitHandler } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledLoginPage } from "./style";
import logo from "../../imgs/logo.png";
import loginicon from "../../imgs/loginicon.png";
import { ButtonGrey, ButtonPrimary } from "../../components/Button";

export interface iFormLogin {
  name: string;
  password: string;
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<iFormLogin>();

  const submitLogin: SubmitHandler<iFormLogin> = (data) => {
    console.log(data);
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
        {/* <input type="text" {...register("name")} /> */}
        <Input
          name="name"
          label="Nome"
          placeholder="Nome"
          type={"text"}
          showButton={false}
          register={register}
        />
        <Input
          name="password"
          label="Senha"
          placeholder="Nome"
          type={"password"}
          showButton={false}
          register={register}
        />
        <ButtonPrimary type="submit" text="Logar" />
      </Form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <ButtonGrey type="button" text="Cadastrar" />
    </StyledLoginPage>
  );
};
