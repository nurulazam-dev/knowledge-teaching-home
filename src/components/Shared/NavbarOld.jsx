import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const NavbarOld = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);

  const logout = () => signOut(auth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loading />;

  return (
    <nav
      className={`header transition-all duration-300 shadow-md bg-white fixed w-full z-50 ${
        scrolled ? "active border-b" : ""
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="logo text-2xl font-bold text-blue-700">
          Knowledge Teaching Home
        </Link>

        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <i
            className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-xl`}
          ></i>
        </button>

        <ul
          className={`links flex-col md:flex-row md:flex gap-6 uppercase font-medium text-lg items-center ${
            mobileOpen
              ? "flex absolute top-16 left-0 w-full bg-white shadow-lg p-6"
              : "hidden md:flex"
          }`}
          role="menu"
        >
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:text-blue-600 transition"
              role="menuitem"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition"
              role="menuitem"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition"
              role="menuitem"
            >
              Contact
            </Link>
          </li>
          {user ? (
            <li className="flex items-center gap-2">
              {user?.photoURL && (
                <img
                  src={user?.photoURL}
                  alt={user?.displayName || "User"}
                  className="w-8 h-8 rounded-full border"
                />
              )}
              <span className="hidden md:inline">
                {user?.displayName || user?.email}
              </span>
              <button
                onClick={logout}
                className="btn btn-outline px-4 py-2 rounded hover:bg-blue-100 transition"
                role="menuitem"
              >
                Sign out
              </button>
            </li>
          ) : (
            <li className="relative group">
              <button
                className="hover:text-blue-600 transition focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Student <i className="fas fa-chevron-down ml-1"></i>
              </button>
              <ul
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block"
                role="menu"
              >
                <li>
                  <Link
                    to="/studentRegister"
                    className="block px-4 py-2 hover:bg-blue-50"
                    role="menuitem"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/studentLogin"
                    className="block px-4 py-2 hover:bg-blue-50"
                    role="menuitem"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarOld;
