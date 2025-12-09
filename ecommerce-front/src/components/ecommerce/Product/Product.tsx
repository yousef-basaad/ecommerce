import { TProduct } from "@customTypes/product"



const Product = ({title, price, img}: TProduct) => {
  return (
    <div className="w-30 flex flex-col justify-between">
      <div className="w-full h-[200px] bg-gray-200">
        <img
          src={`/api-image${img}`}
          alt={title}
          className="w-full h-45 object-cover"
        />
      </div>
      <h2 className="text-lg mt-2 mb-3 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{title}</h2>
      <h3 className="text-sm">{price} SAR</h3>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to cart</button>
    </div>
  );
};

export default Product;