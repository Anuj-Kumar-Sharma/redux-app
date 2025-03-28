import React from 'react';
import CartItem from './CartItem';
import CheckoutBar from './CheckoutBar';
import { PawPrint, ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

const Cart = () => {
 
  const cart = useSelector(state => state.cart.items);

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-8 px-6 ">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
              />
            ))
          ) : (
            <div className="flex flex-col gap-4 h-full items-center pt-[50%] text-gray-300">
              <PawPrint size={30} />
              <h3 className="text-lg ">Your cart is Empty</h3>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="sticky bottom-0 bg-gray-800 p-8">
            <CheckoutBar />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
