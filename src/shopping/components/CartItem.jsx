import { Minus, Plus, Trash } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../store/slices/cartSlice';

const CartItem = ({
  id,
  title,
  price,
  quantity,
  image
}) => {

  const dispatch = useDispatch();

  return (
    <div className="flex shadow-xl group gap-6 border-b pb-8 border-gray-800">
      <div
        id="img-wrapper"
        className="h-20 w-20 rounded-xl overflow-hidden shrink-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div id="cart-content" className="space-y-2 flex-1">
        <h3 className="font-fancy text-xl ">{title}</h3>
        <p className="text-lg text-gray-300">Rs. {price}</p>
        <div id="card-footer" className="flex gap-4 mt-4 items-center">
          <button
            onClick={() => dispatch(decrementQuantity({id}))}
            className="p-2 rounded-lg  bg-gray-800 hover:bg-gray-600 cursor-pointer"
          >
            {quantity == 1 ? <Trash color='red' size={16} /> : <Minus size={16} />}
          </button>
          <span className="w-6 text-center">{quantity}</span>
          <button
            onClick={() => dispatch(incrementQuantity({id}))}
            className="p-2 rounded-lg  bg-gray-800 hover:bg-gray-600 cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
