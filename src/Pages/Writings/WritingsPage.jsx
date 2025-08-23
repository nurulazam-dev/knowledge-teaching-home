import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaEdit,
  FaFileSignature,
  FaMailBulk,
} from "react-icons/fa";
import { FiFileText, FiPenTool } from "react-icons/fi";

const writings = [
  {
    title: "Paragraphs",
    description: "Short, concise writings to improve your skills.",
    icon: <FiFileText className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Compositions",
    description: "Well-structured essays for deeper understanding.",
    icon: <FaBookOpen className="w-10 h-10 text-green-400" />,
  },
  {
    title: "Emails",
    description: "Formal & informal email writing practice.",
    icon: <FaMailBulk className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Letters",
    description: "Friendly and official letter writing guidance.",
    icon: <FaFileSignature className="w-10 h-10 text-red-400" />,
  },
  {
    title: "Stories",
    description: "Creative story writing to build imagination.",
    icon: <FiPenTool className="w-10 h-10 text-purple-400" />,
  },
  {
    title: "Applications",
    description: "Learn to write formal applications effectively.",
    icon: <FaEdit className="w-10 h-10 text-pink-400" />,
  },
];

export default function WritingsPage() {
  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          ✍️ Writings Practice
        </motion.h2>
        <p className="text-gray-300 mb-7 max-w-2xl mx-auto">
          Explore all types of writings to improve your academic and creative
          skills.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {writings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f1b33] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
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
