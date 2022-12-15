import { useContext } from "react";
import { StyledHomePage } from "./style";

import logo from "../../imgs/logo.png";
import searchIcon from "../../imgs/searchmobile.png";
import cartIcon from "../../imgs/carticon.png";
import exitIcon from "../../imgs/exiticon.png";
import { ProductList } from "../../components/ProductList";
import { Card } from "../../components/Card";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <header>
        <section>
          <img src={logo} alt="" />
          <div>
            <figure>
              <img src={searchIcon} alt="Icone de pesquisa" />
            </figure>
            <figure>
              <img src={cartIcon} alt="Icone de carrinho de compras" />
              <p>0</p>
            </figure>
            <figure>
              <img src={exitIcon} alt="Icone de sair do Burguer Kenzie 😥 " />
            </figure>
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
    </StyledHomePage>
  );
};
