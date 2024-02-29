import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartQuantity } from "../../utils/actions";

function ProductItem(item) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { image, name, _id, price, quantity } = item;

  const addToCartHandler = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch(
        updateCartQuantity(_id, parseInt(itemInCart.purchaseQuantity) + 1)
      );
    } else {
      dispatch(addToCart({ ...item, purchaseQuantity: 1 }));
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {quantity === 1 ? "item" : "items"} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
