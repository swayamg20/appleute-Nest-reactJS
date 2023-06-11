import React from 'react';

function Order({ cartItems, totalPrice }) {
  return (
    <div>
      <h2>Order</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}
            {' '}
            - $
            {item.price}
            {' '}
            - Quantity:
            {item.quantity}
          </li>
        ))}
      </ul>
      <p>
        Total Price: $
        {totalPrice}
      </p>
      <button>Place Order</button>
    </div>
  );
}

export default Order;
