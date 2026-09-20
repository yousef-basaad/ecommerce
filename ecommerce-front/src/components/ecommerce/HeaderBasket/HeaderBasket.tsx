import { Link } from "react-router-dom";
import Logo from "../../../assets/svg/cart.svg?react";
import { useAppSelector } from "@store/hooks";

const HeaderBasket = () => {
  const count = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <Link to="/cart" className="relative text-gray-700 hover:text-gray-900 transition-colors">
      <Logo title="basket icon" className="w-6 h-6" />
      <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-semibold">
        {count}
      </div>
    </Link>
  );
};

export default HeaderBasket;
