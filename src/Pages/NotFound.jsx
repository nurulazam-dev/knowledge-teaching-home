// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-center px-4">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center w-24 h-24 rounded-full bg-red-600 text-white shadow-2xl"
      >
        <MdErrorOutline className="text-9xl" />
      </motion.div>

      {/* Error Code */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-6 text-7xl font-extrabold text-red-700 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-2xl md:text-3xl font-bold text-red-800"
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-3 text-gray-600 max-w-lg"
      >
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back to the homepage!
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          <FaHome className="text-lg" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
