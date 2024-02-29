import React from'react';
import { useDispatch } from'react-redux';
import { removeFromCart } from '../../utils/actions';

function DeleteBtn({ itemId }){
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <span role='button' tabIndex="0" onClick={handleClick} onKeyDown={handleClick}>
      🗑️
    </span>
  );
}

export default DeleteBtn;