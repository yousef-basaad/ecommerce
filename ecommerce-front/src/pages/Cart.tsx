import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { removeItem, incrementItem, decrementItem, clearCart } from "@store/cart/cartSlice";
import { resolveProductImageSrc } from "@util/productImage";

function Cart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <Link
          to="/categories"
          className="mt-6 inline-flex items-center bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
              <img
                src={resolveProductImageSrc(item.product.img)}
                alt={item.product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-medium text-gray-800 truncate">{item.product.title}</h2>
              <p className="text-sm font-semibold text-gray-950 mt-1">{item.product.price} SAR</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => item.product.id && dispatch(decrementItem(item.product.id))}
                className="w-7 h-7 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
              <button
                onClick={() => item.product.id && dispatch(incrementItem(item.product.id))}
                className="w-7 h-7 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                +
              </button>
            </div>
            <button
              onClick={() => item.product.id && dispatch(removeItem(item.product.id))}
              className="text-sm text-gray-400 hover:text-red-500 ml-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
        <button onClick={() => dispatch(clearCart())} className="text-sm text-gray-500 hover:text-red-500">
          Clear cart
        </button>
        <div className="text-right">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-xl font-bold text-gray-950">{total.toFixed(2)} SAR</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
