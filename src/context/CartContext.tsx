import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export interface iCartContext {
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  cartProducts: iProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  requestProducts: () => void;
}

export interface iProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

export const CartContext = createContext({} as iCartContext);

interface iCartProvider {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: iCartProvider) => {
  const [products, setProducts] = useState([] as iProduct[]);
  const [cartProducts, setCartProducts] = useState([] as iProduct[]);
  // const navigate = useNavigate();

  const requestProducts = async () => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        requestProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
