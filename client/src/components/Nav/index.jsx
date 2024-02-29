import React from'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/actions';

function Nav() {
  const loggedIn = useSelector((state) =>!!state.auth.id);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role='img' aria-label='shopping-bag'>
            🛒
          </span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
        {loggedIn ? (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to='/orderHistory'>Order History</Link>
            </li>
            <li className="mx-1">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to='/signup'>Signup</Link>
            </li>
            <li className="mx-1">
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Nav;