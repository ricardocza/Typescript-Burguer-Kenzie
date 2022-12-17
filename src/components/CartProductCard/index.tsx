import { CartContext, iProduct } from "../../context/CartContext";
import { StyledProductCard } from "./style";
import trash from "../../imgs/trash-can.png";
import React, { useContext } from "react";

interface iProductCart {
  cartProduct: iProduct;
}

export const CartProductCard = ({ cartProduct }: iProductCart) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const subtractQuantity = (event: any) => {
    if (event.currentTarget.nextSibling.value > 1) {
      const currentId =
        event.currentTarget.parentElement.parentElement.parentElement.id;
      event.currentTarget.nextSibling.value--;
    }
  };

  const addQuantity = (event: any) => {
    event.currentTarget.previousSibling.value++;

    const currentId =
      event.currentTarget.parentElement.parentElement.parentElement.id;
    const currentValue = event.currentTarget.previousSibling.value;
    setCartProducts((oldValues) => {
      oldValues = oldValues.map((element) => {
        if (element.id == currentId) {
          element.quantity = parseInt(currentValue);
          return element;
        } else return element;
      });
      return oldValues;
    });
  };

  const removeProduct = (event: React.MouseEvent<HTMLElement>) => {
    const currentElement = event.currentTarget.closest("li")?.id;
    setCartProducts(
      cartProducts.filter((element) => element.id != currentElement)
    );
  };

  return (
    <StyledProductCard id={cartProduct.id}>
      <figure>
        <img src={cartProduct.img} alt="" />
      </figure>
      <div>
        <h3>{cartProduct.name}</h3>
        <div>
          <button onClick={subtractQuantity}>-</button>
          <input
            type="number"
            min={1}
            defaultValue={cartProduct.quantity}
            disabled={true}
          />
          <button onClick={addQuantity}>+</button>
        </div>
      </div>
      <button onClick={removeProduct}>
        <img src={trash} alt="" />
      </button>
    </StyledProductCard>
  );
};
