import { StyledCard } from "./style";
import mockImg from "../../imgs/mock-hamb.png";
import { ButtonPrimary } from "../Button";
import { iProduct } from "../../context/CartContext";

export const Card = ({ id, name, category, price, img }: iProduct) => {
  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };
  return (
    <StyledCard id={id}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <h3>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
        <ButtonPrimary onClick={addToCart} text="Adicionar" type="button" />
      </div>
    </StyledCard>
  );
};
