import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import UserLayout from './Userlayout/Userlayout';
import Cart from './components/Products/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [badgeCount, setBadgeCount] = useState(0);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);

    console.log(cart.length);
    setBadgeCount(badgeCount + 1);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div className="w-100" style={{ maxWidth: '100%' }}>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route
              exact
              path="dashboard"
              element={
                <Dashboard badgeCount={badgeCount} handleClick={handleClick} />
              }
            />
            <Route path="/" element={<Login />} />
            <Route
              path="/cart"
              element={(
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              )}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
