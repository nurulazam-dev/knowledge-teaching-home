import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../assets/logo/logo.png";
import { LuLogIn } from "react-icons/lu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Courses", path: "/courses" },
    { name: "Writings", path: "/writings" },
    { name: "Grammars", path: "/grammars" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white shadow-lg border border-b-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <div className="flex justify-center items-center">
            <img
              src={brandLogo}
              alt="Knowledge Teaching Home"
              className="h-10 mr-2 w-auto"
            />
            <span className="text-xl lg:text-3xl text-sky-600">K T H</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 hover:scale-[1.04] ${
                  isActive
                    ? "text-yellow-600"
                    : "text-gray-300 hover:text-yellow-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="kth-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 28,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-300 flex justify-center items-center"
          >
            <span>Login</span> <LuLogIn className="ml-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#0a1629] overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className="hover:text-orange-400 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <li>
                <NavLink
                  to="/login"
                  className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
