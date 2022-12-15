import { useContext, useState } from "react";
import { StyledHomePage } from "./style";

import logo from "../../imgs/logo.png";
import searchIcon from "../../imgs/searchmobile.png";
import cartIcon from "../../imgs/carticon.png";
import exitIcon from "../../imgs/exiticon.png";
import { ProductList } from "../../components/ProductList";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/CartModal";

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const exitButton = () => {
    navigate("/");
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <StyledHomePage>
      <header>
        <section>
          <img src={logo} alt="" />
          <div>
            <button>
              <img src={searchIcon} alt="Icone de pesquisa" />
            </button>
            <button onClick={openModal}>
              <img src={cartIcon} alt="Icone de carrinho de compras" />
              <p>0</p>
            </button>
            <button onClick={exitButton}>
              <img src={exitIcon} alt="Icone de sair do Burguer Kenzie 😥 " />
            </button>
          </div>
        </section>
      </header>

      <ProductList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductList>
      {showModal && <Modal setShowModal={setShowModal} />}
    </StyledHomePage>
  );
};
