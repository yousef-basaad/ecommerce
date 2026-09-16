import { Link, NavLink } from "react-router-dom";
import HeaderBasket from "../../ecommerce/HeaderBasket/HeaderBasket";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `relative text-sm font-medium py-1 transition-colors ${
    isActive
      ? "text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-900"
      : "text-gray-500 hover:text-gray-900"
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-1.5">
          <span className="text-xl font-extrabold tracking-tight lowercase">my</span>
          <span className="px-2 py-0.5 bg-gray-900 text-white rounded-md text-lg font-bold tracking-tight">
            Ecom
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden sm:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/categories" className={navLinkClasses}>
            Categories
          </NavLink>
          <NavLink to="/about-us" className={navLinkClasses}>
            About
          </NavLink>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          <NavLink to="/login" className={navLinkClasses}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="hidden sm:inline-flex text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors px-4 py-2 rounded-full"
          >
            Register
          </NavLink>
          <HeaderBasket />
        </div>
      </div>
    </header>
  );
}
