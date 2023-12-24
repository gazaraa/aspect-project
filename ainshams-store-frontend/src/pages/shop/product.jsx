import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const handleDelete = async () => {
    try {
      // Make a DELETE request to the server endpoint
      await axios.delete(`http://localhost:8080/products/${id}`);
      console.log("product " + name + " with id:" + id + " is deleted");
      window.location.reload();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="addToCartBttn" >Delete Product</button>
    </div>
  );
};
