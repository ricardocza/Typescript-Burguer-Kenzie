import { useForm, SubmitHandler } from "react-hook-form";
import { Form, iSubmitHandler } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledLoginPage } from "./style";

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
      <h1>LOGIN DO BURGÃO DA KENZIE</h1>
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
        <button type="submit">enviar</button>
      </Form>
    </StyledLoginPage>
  );
};
