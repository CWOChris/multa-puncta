import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item._id));
    idbPromise('cart', 'delete', {
      ...item
    });
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value === 0) {
      dispatch(removeFromCart(item._id));
      idbPromise('cart', 'delete', {
       ...item
      });
    } else {
      dispatch(updateCartQuantity(item._id, value));
      idbPromise('cart', 'put', {
       ...item,
        purchaseQuantity: value
      });
    }
};

return (
  <div className="flex-row">
    <div>
      <img src="{`/images/${item.image}" alt="" />
    </div>
    <div>
      <div>{item.name}, ${item.price}</div>
      <div>
        <span>Qty:</span>
        <input type='number' placeholder='1' value={item.purchaseQuantity} onChange={handleQuantityChange} />
        <span role='img' aria-label='trash' onClick={handleRemoveFromCart}>
          🗑️
        </span>
      </div>
    </div>
  </div>
);
};

export default CartItem;