import type { TProduct } from "@customTypes/product"

const Product = ({ title, price, img }: TProduct) => {
  return (
    <div className="group w-full max-w-[220px] flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="w-full h-[220px] bg-gray-100 overflow-hidden">
        <img
          src={img.replace('https://eg.hm.com', '/api-image')}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <h2 className="text-sm font-medium text-gray-800 truncate">{title}</h2>
        <h3 className="text-sm font-semibold text-gray-950">{price} SAR</h3>
        <button className="mt-2 w-full bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-full transition-colors hover:bg-gray-700">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
