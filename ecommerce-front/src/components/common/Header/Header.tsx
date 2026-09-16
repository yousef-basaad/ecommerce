import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderBasket from "../../ecommerce/HeaderBasket/HeaderBasket";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `relative text-sm font-medium py-1 transition-colors ${
    isActive
      ? "text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-900"
      : "text-gray-500 hover:text-gray-900"
  }`;

const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `text-base font-medium py-2 ${isActive ? "text-gray-900" : "text-gray-500"}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-1.5" onClick={() => setMenuOpen(false)}>
          <span className="text-xl font-extrabold tracking-tight lowercase">my</span>
          <span className="px-2 py-0.5 bg-gray-900 text-white rounded-md text-lg font-bold tracking-tight">
            Ecom
          </span>
        </Link>

        {/* NAV (desktop) */}
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

        {/* RIGHT SIDE (desktop) */}
        <div className="hidden sm:flex items-center gap-5">
          <NavLink to="/login" className={navLinkClasses}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors px-4 py-2 rounded-full"
          >
            Register
          </NavLink>
          <HeaderBasket />
        </div>

        {/* RIGHT SIDE (mobile) */}
        <div className="flex sm:hidden items-center gap-4">
          <HeaderBasket />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col justify-center gap-1.5 w-6 h-6"
          >
            <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* NAV (mobile drawer) */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-1">
          <NavLink to="/" end className={mobileNavLinkClasses} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/categories" className={mobileNavLinkClasses} onClick={() => setMenuOpen(false)}>
            Categories
          </NavLink>
          <NavLink to="/about-us" className={mobileNavLinkClasses} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/login" className={mobileNavLinkClasses} onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm font-semibold text-white bg-gray-900 px-4 py-2.5 rounded-full"
          >
            Register
          </NavLink>
        </nav>
      )}
    </header>
  );
}
