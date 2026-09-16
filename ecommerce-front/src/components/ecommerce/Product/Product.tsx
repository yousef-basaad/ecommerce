import type { TProduct } from "@customTypes/product"
import { Link } from "react-router-dom";
import { useAppDispatch } from "@store/hooks";
import { addItem } from "@store/cart/cartSlice";
import { resolveProductImageSrc } from "@util/productImage";

const Product = (product: TProduct) => {
  const { id, title, price, img, cat_prefix } = product;
  const dispatch = useAppDispatch();
  const detailLink = `/categories/products/${cat_prefix}/${id}`;

  return (
    <div className="group w-full max-w-[220px] flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <Link to={detailLink} className="block w-full h-[220px] bg-gray-100 overflow-hidden">
        <img
          src={resolveProductImageSrc(img)}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-1.5 p-4">
        <Link to={detailLink}>
          <h2 className="text-sm font-medium text-gray-800 truncate hover:underline">{title}</h2>
        </Link>
        <h3 className="text-sm font-semibold text-gray-950">{price} SAR</h3>
        <button
          onClick={() => dispatch(addItem(product))}
          className="mt-2 w-full bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-full transition-colors hover:bg-gray-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
