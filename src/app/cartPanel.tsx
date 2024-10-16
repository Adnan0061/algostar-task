import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "@/lib/store";
import { removeFromCart, updateQuantity } from "@/lib/features/cartSlice";

const CartPanel = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="bg-white w-full max-w-md h-full overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-2xl">
          &times;
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="font-medium">
                  Unit Price:{" "}
                  <span className="font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </p>
                <p className="font-medium">
                  Item Total:{" "}
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          ...item,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    className="text-gray-500 hover:text-gray-700 bg-gray-200 w-6 p-2 rounded-s-md border-[0.5px] border-gray-300"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="p-2 bg-gray-100 border-[0.5px] border-gray-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          ...item,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                    className="text-gray-500 hover:text-gray-700 bg-gray-200 w-6 p-2 rounded-e-md border-[0.5px] border-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">
              Total: $
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPanel;
