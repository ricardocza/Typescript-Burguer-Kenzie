import React, { useState } from "react";
import { StyledModal, StyledModalBG } from "./style";

interface iModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setShowModal }: iModalProps) => {
  const [cartProducts, setCartProducts] = useState(["teste1", "teste2"]);

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
          <ul>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </ul>
        ) : (
          <ul>
            {cartProducts.map((element) => (
              <p>{element}</p>
            ))}
          </ul>
        )}
      </StyledModal>
    </StyledModalBG>
  );
};
