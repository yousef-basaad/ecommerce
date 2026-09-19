import type { TCategory } from "@customTypes/category";
import { Link } from "react-router-dom";

const Category = ({ title, prefix, img }: TCategory) => {
  return (
    <Link to={`/categories/products/${prefix}`} className="group flex flex-col items-center">
      <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:ring-gray-300">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h4 className="mt-4 text-sm font-semibold text-gray-800 capitalize tracking-wide group-hover:text-gray-950">
        {title}
      </h4>
    </Link>
  );
};

export default Category;
