import { motion } from "framer-motion";
import { FaAward, FaGraduationCap, FaStar, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    icon: <FaGraduationCap className="w-10 h-10 text-yellow-400" />,
    title: "95%+ Success Rate",
    description:
      "Our students consistently achieve top grades in board exams from Class 6 to 12.",
  },
  {
    icon: <FaTrophy className="w-10 h-10 text-indigo-400" />,
    title: "National Olympiad Winners",
    description:
      "Many of our students have excelled in National & Regional Math/Science Olympiads.",
  },
  {
    icon: <FaStar className="w-10 h-10 text-orange-400" />,
    title: "Scholarships Earned",
    description:
      "Over 300+ students awarded scholarships in schools, colleges, and universities.",
  },
  {
    icon: <FaAward className="w-10 h-10 text-green-400" />,
    title: "University Admissions",
    description:
      "Our alumni are studying at top universities both in Bangladesh and abroad.",
  },
];

export default function StudentSuccess() {
  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Student Success & Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We take pride in our students’ hard work and excellence. Here are some
          of our major achievements that inspire future learners.
        </motion.p>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0f1e3a] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
