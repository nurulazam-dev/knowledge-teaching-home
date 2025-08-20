import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandLogo from "../../assets/logo/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 lg:px-10">
        {/* Brand */}
        <Link to="/" className="font-extrabold tracking-tight">
          <div className="flex justify-center items-center">
            <img
              src={brandLogo}
              alt="Knowledge Teaching Home"
              className="h-10 mr-2 w-auto"
            />
            <span className="hidden md:inline text-xl lg:text-2xl bg-gradient-to-r from-violet-600 to-indigo-700 bg-clip-text text-transparent capitalize">
              Knowledge Teaching Home
            </span>
            <span className="md:hidden text-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700 bg-clip-text text-transparent">
              KTH
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 hover:scale-[1.04] ${
                  isActive
                    ? "text-violet-600"
                    : "text-gray-700 hover:text-violet-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="kth-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700"
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

          {/* Auth */}
          <div className="flex gap-3 ml-6">
            <Link
              to="/login"
              className="btn btn-sm border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700 hover:opacity-90"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg shadow"
          >
            <ul className="px-6 py-5 flex flex-col gap-4 text-lg">
              {navLinks.map((l) => (
                <NavLink
                  key={l.name}
                  to={l.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-violet-600"
                >
                  {l.name}
                </NavLink>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-outline border-violet-600 text-violet-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="btn text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700"
                >
                  Register
                </Link>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
