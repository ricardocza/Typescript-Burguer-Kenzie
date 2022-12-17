import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export interface iCartContext {
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  cartProducts: iProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  requestProducts: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  totals: number;
  setTotals: React.Dispatch<React.SetStateAction<number>>;
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
  const [showModal, setShowModal] = useState(false);
  const [totals, setTotals] = useState(0);

  const requestProducts = async () => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
        showModal,
        setShowModal,
        totals,
        setTotals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
