import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductById from "@store/products/actGetProductById";
import { addItem } from "@store/cart/cartSlice";
import { resolveProductImageSrc } from "@util/productImage";

function ProductDetail() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { current, currentLoading, currentError } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (params.id) dispatch(actGetProductById(params.id));
  }, [dispatch, params.id]);

  if (currentLoading === "pending") {
    return <div className="max-w-6xl mx-auto px-4 py-24 text-center text-gray-500">Loading...</div>;
  }

  if (currentError) {
    return <div className="max-w-6xl mx-auto px-4 py-24 text-center text-red-500">{currentError}</div>;
  }

  if (!current) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={resolveProductImageSrc(current.img)}
          alt={current.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">{current.title}</h1>
        <p className="text-xl font-semibold text-gray-950">{current.price} SAR</p>
        <button
          onClick={() => dispatch(addItem(current))}
          className="mt-4 w-full sm:w-auto bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors hover:bg-gray-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
