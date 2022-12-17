import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartProductCard } from "../CartProductCard";
import { CartTotals } from "../CartTotals";
import { StyledModal, StyledModalBG } from "./style";

interface iModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setShowModal }: iModalProps) => {
  const { cartProducts, setCartProducts, setTotals } = useContext(CartContext);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <StyledModalBG>
      <StyledModal>
        <header>
          <h3>Carrinho de compras</h3>
          <button onClick={closeModal} type="button">
            x
          </button>
        </header>
        {cartProducts.length === 0 ? (
          <div>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          <ul>
            {cartProducts.map((element) => (
              <CartProductCard key={element.id} cartProduct={element} />
            ))}
          </ul>
        )}
        {cartProducts.length > 0 && <CartTotals />}
      </StyledModal>
    </StyledModalBG>
  );
};
