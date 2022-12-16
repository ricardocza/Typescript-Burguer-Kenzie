import { StyledCard } from "./style";
import { ButtonPrimary } from "../Button";
import { CartContext, iProduct } from "../../context/CartContext";
import { useContext } from "react";

export const Card = ({ id, name, category, price, img }: iProduct) => {
  const { products, cartProducts, setCartProducts } = useContext(CartContext);

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentId = event.currentTarget.id;
    const currentObject = products.find((element) => element.id == currentId);
    if (!cartProducts.find((element) => element.id == currentId)) {
      setCartProducts([...cartProducts, currentObject]);
    }
    console.log(cartProducts);
  };
  return (
    <StyledCard>
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
        <ButtonPrimary
          id={id}
          onClick={addToCart}
          text="Adicionar"
          type="button"
        />
      </div>
    </StyledCard>
  );
};
