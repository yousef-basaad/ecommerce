import Logo from "../../../assets/svg/cart.svg?react";

const HeaderBasket = () => {
  return (
    <div className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
      <Logo title="basket icon" className="w-6 h-6" />
      <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-semibold">
        0
      </div>
    </div>
  );
};

export default HeaderBasket;
