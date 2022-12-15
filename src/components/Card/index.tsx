import { StyledCard } from "./style";
import mockImg from "../../imgs/mock-hamb.png";
import { ButtonPrimary } from "../Button";

export const Card = () => {
  return (
    <StyledCard>
      <figure>
        <img src={mockImg} alt="" />
      </figure>
      <div>
        <h3>hamburguer</h3>
        <p>Sanduíches</p>
        <h3>R$ 14,00</h3>
        <ButtonPrimary text="Adicionar" type="button" />
      </div>
    </StyledCard>
  );
};
