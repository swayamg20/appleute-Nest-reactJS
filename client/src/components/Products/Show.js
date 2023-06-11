import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.js';
import Cart from '../Products/Cart.js';
import Order from "./Order";

function Show() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const increaseQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );

    setCartItems(updatedItems);
  };

  const decreaseQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    setCartItems(updatedItems);
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" render={() => <Dashboard addToCart={addToCart} />} />
        <Route
          path="/cart"
          render={() => (
            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route
          path="/order"
          render={() => <Order cartItems={cartItems} totalPrice={totalPrice} />}
        />
      </div>
    </Router>
  );
}

export default Show;
