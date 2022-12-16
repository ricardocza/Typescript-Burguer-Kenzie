import { useContext, useEffect, useState } from "react";
import { StyledHomePage } from "./style";

import logo from "../../imgs/logo.png";
import searchIcon from "../../imgs/searchmobile.png";
import cartIcon from "../../imgs/carticon.png";
import exitIcon from "../../imgs/exiticon.png";
import { ProductList } from "../../components/ProductList";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/CartModal";
import { UserProvider } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const { products, requestProducts } = useContext(CartContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const navigate = useNavigate();

  const exitButton = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    console.log(cartProducts);
    requestProducts();
  }, []);

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
              <p>{cartProducts.length}</p>
            </button>
            <button onClick={exitButton}>
              <img src={exitIcon} alt="Icone de sair do Burguer Kenzie 😥 " />
            </button>
          </div>
        </section>
      </header>

      <ProductList>
        {products.length > 0 ? (
          products.map((element) => (
            <Card
              key={element.id}
              id={element.id}
              name={element.name}
              category={element.category}
              price={element.price}
              img={element.img}
            />
          ))
        ) : (
          <p>lista vazia</p>
        )}
      </ProductList>
      {showModal && <Modal setShowModal={setShowModal} />}
    </StyledHomePage>
  );
};
