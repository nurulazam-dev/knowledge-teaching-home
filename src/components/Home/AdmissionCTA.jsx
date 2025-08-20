import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AdmissionCTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-20 px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-indigo-500/10 to-violet-600/10 opacity-40 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Start Your Journey with{" "}
          <span className="text-orange-500">Knowledge Teaching Home</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unlock your full potential with expert mentors, personalized guidance,
          and a supportive learning environment for students from{" "}
          <span className="font-semibold text-white">Class 3 to Class 12</span>.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#admission-form"
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-600/30 transition duration-300"
          >
            Enroll Now
            <FaArrowRight />
          </a>
        </motion.div>

        {/* Extra Info */}
        <motion.p
          className="mt-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          Limited seats available • Early enrollment ensures priority placement
        </motion.p>
      </div>
    </section>
  );
}
