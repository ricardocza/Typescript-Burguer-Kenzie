import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { StyledLoginPage } from "./style";

import { ButtonGrey, ButtonPrimary } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Header } from "../../components/Header";
import { loginSchema } from "./loginSchema";
import { FormError } from "../../components/FormError";

export interface iFormLogin {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { requestLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const submitLogin: SubmitHandler<iFormLogin> = async (data) => {
    requestLogin(data);
  };

  return (
    <StyledLoginPage>
      <Header />
      <section>
        <Form onSubmit={handleSubmit(submitLogin)}>
          <h1>Login</h1>
          <Input
            label="Email"
            placeholder="Email"
            type={"text"}
            showButton={false}
            register={register("email")}
          />
          {errors.email?.message && <FormError text={errors.email.message} />}

          <Input
            label="Senha"
            placeholder="Nome"
            type={"password"}
            showButton={false}
            register={register("password")}
          />
          {errors.password?.message && (
            <FormError text={errors.password.message} />
          )}
          <ButtonPrimary type="submit" text="Logar" />
        </Form>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to={"/register"}>
          <ButtonGrey type="button" text="Cadastrar" />
        </Link>
      </section>
    </StyledLoginPage>
  );
};
