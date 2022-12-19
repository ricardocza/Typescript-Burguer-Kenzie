import { StyledProductList } from "./style";

interface iProductList {
  children: React.ReactNode;
}

export const ProductList = ({ children }: iProductList) => {
  return <StyledProductList>{children}</StyledProductList>;
};
