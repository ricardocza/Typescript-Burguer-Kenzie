import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { StyledRegistrerPage } from "./style";
import { ButtonGrey } from "../../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Header } from "../../components/Header";
import { registerSchema } from "./registerSchema";
import { FormError } from "../../components/FormError";

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {
  const { requestNewUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const submitLogin: SubmitHandler<iFormRegister> = (data) => {
    console.log(register);
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
        {errors.name?.message && <FormError text={errors.name.message} />}
        <Input
          label="Email"
          placeholder="Email"
          type={"email"}
          showButton={false}
          register={register("email")}
        />
        {errors.email?.message && <FormError text={errors.email.message} />}

        <Input
          label="Senha"
          placeholder="Senha"
          type={"password"}
          showButton={false}
          register={register("password")}
        />
        {errors.password?.message && (
          <FormError text={errors.password.message} />
        )}
        <Input
          label="Confirmar Senha"
          placeholder="Confirmar Senha"
          type={"password"}
          showButton={false}
          register={register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <FormError text={errors.confirmPassword.message} />
        )}
        <ButtonGrey type="submit" text="Cadastrar" />
      </Form>
    </StyledRegistrerPage>
  );
};
