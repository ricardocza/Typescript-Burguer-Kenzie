import { type } from "os";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ButtonGrey } from "../Button";
import { StyledTotals } from "./style";

export const CartTotals = () => {
  const { totals, setTotals, cartProducts, setCartProducts, setShowModal } =
    useContext(CartContext);

  const removeCart = () => {
    setCartProducts([]);
    setShowModal(false);
  };

  useEffect(() => {
    setTotals(
      cartProducts.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity!;
      }, 0)
    );
  }, [cartProducts]);

  return (
    <StyledTotals>
      <div>
        <h3>Total</h3>
        <h2>
          {totals.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
      <ButtonGrey text="Remover todos" type="button" onClick={removeCart} />
    </StyledTotals>
  );
};
