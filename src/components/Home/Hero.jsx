import { motion } from "framer-motion";
import { FaUsers, FaBookOpen, FaGraduationCap } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white flex items-center py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to{" "}
            <span className="text-orange-500">Knowledge Teaching Home</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A trusted{" "}
            <span className="text-indigo-400 font-semibold">
              private coaching center{" "}
            </span>
            where students from{" "}
            <span className="text-orange-400">class 3 to 12</span> — school,
            madrasha, and college — learn with care and guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 text-lg rounded-full bg-orange-600 hover:bg-orange-500">
              Get Admission
            </button>
            <button className="px-6 py-3 text-lg rounded-full bg-indigo-600 hover:bg-indigo-500">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              className="bg-[#101b33] rounded-2xl p-6 shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaBookOpen className="text-5xl text-orange-500 mb-3" />
              <p className="text-lg font-semibold">School (Class 3-10)</p>
            </motion.div>

            <motion.div
              className="bg-[#101b33] rounded-2xl p-6 shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaUsers className="text-5xl text-indigo-500 mb-3" />
              <p className="text-lg font-semibold">Madrasha Students</p>
            </motion.div>

            <motion.div
              className="bg-[#101b33] rounded-2xl p-6 shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaGraduationCap className="text-5xl text-orange-400 mb-3" />
              <p className="text-lg font-semibold">College (Class 11-12)</p>
            </motion.div>

            <motion.div
              className="bg-[#101b33] rounded-2xl p-6 shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaBookOpen className="text-5xl text-indigo-400 mb-3" />
              <p className="text-lg font-semibold">Expert Mentors</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
