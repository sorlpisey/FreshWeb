// CartPage.jsx
import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Your Bookings</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {[...cart].reverse().map((item, index) => (
  <div
    key={index}
    className="p-4 bg-white shadow rounded-lg flex items-start gap-4"
  >
    <img
      src={item.imageUrl}
      alt={item.name}
      className="w-32 h-32 object-cover rounded"
    />
    <div>
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-600">Date: {item.date}</p>
      <p className="text-gray-600">Time: {item.time}</p>
      <p className="text-gray-600">Duration: {item.duration}</p>
      <p className="text-gray-600">Location: {item.location}</p>
      <p className="text-red-600 font-bold mt-2">{item.price}</p>
    </div>
  </div>
))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
