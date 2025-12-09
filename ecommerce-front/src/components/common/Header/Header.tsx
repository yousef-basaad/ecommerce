import { NavLink } from "react-router-dom";
import HeaderBasket from "../../ecommerce/HeaderBasket/HeaderBasket";




export default function Header() {
  const linkClasses =
    "text-gray-300 hover:text-white text-sm";

  const activeClasses = "text-white font-semibold";

  return (
    <header className="w-full">

     {/* TOP LOGO */}
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

  {/* LEFT SIDE (LOGO GROUP TOGETHER) */}
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold lowercase tracking-tight">my</span>
    <span className="px-2 py-1 bg-sky-600 text-white rounded text-lg font-semibold">
      Ecom
    </span>
  </div>

  {/* RIGHT SIDE (CART) */}
  <HeaderBasket />

</div>
      {/* NAVBAR (BOXED) */}
      <div className="max-w-6xl mx-auto px-4">
        <nav className="bg-gray-800 rounded-sm px-4 py-2 flex justify-between items-center">

          {/* LEFT LINKS */}
          <div className="flex gap-6">
            <NavLink 
              to="/"
              className={({ isActive } ) =>
                isActive ? activeClasses : linkClasses
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              Categories
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              About
            </NavLink>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex gap-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              Register
            </NavLink>
          </div>

        </nav>
      </div>

    </header>
  );
}
