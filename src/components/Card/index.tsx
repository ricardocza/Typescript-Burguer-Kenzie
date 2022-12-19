import { StyledCard } from "./style";
import { ButtonPrimary } from "../Button";
import { CartContext, iProduct } from "../../context/CartContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export const Card = ({ id, name, category, price, img }: iProduct) => {
  const { products, cartProducts, setCartProducts } = useContext(CartContext);

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentId = event.currentTarget.id;
    const currentObject = {
      ...products.find((element) => element.id == currentId)!,
      quantity: 1,
    };

    if (!cartProducts.find((element) => element.id == currentId)) {
      setCartProducts([...cartProducts, currentObject]);
      toast.success("Produto adicionado ao carrinho!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Produto já foi adicionado ao carrinho!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
