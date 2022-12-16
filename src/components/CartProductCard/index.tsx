import { iProduct } from "../../context/CartContext";
import { StyledProductCard } from "./style";
import trash from "../../imgs/trash-can.png";
interface iProductCart {
  cartProduct: iProduct;
}

export const CartProductCard = ({ cartProduct }: iProductCart) => {
  return (
    <StyledProductCard>
      <figure>
        <img src={cartProduct.img} alt="" />
      </figure>
      <div>
        <h3>{cartProduct.name}</h3>
        <div>
          <button>-</button>
          <input type="number" min={1} defaultValue={1} />
          <button>+</button>
        </div>
      </div>
      <button>
        <img src={trash} alt="" />
      </button>
    </StyledProductCard>
  );
};
