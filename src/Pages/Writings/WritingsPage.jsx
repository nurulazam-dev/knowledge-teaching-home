import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaEdit,
  // FaFileSignature,
  FaMailBulk,
} from "react-icons/fa";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { TfiWrite } from "react-icons/tfi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TbBrandStorybook, TbFileCv } from "react-icons/tb";
import { Link } from "react-router-dom";

const writings = [
  {
    title: "Formal Writing",
    description: "Master the art of formal writing.",
    icon: <TfiWrite className="w-10 h-10 text-violet-500" />,
    link: "/writings/formal-writing",
  },
  {
    title: "Paragraphs",
    description: "Short, concise writings to improve your skills.",
    icon: <FiFileText className="w-10 h-10 text-blue-400" />,
    link: "/writings/paragraphs",
  },
  {
    title: "Compositions",
    description: "Well-structured essays for deeper understanding.",
    icon: <FaBookOpen className="w-10 h-10 text-green-400" />,
    link: "/writings/compositions",
  },
  {
    title: "Emails",
    description: "Formal & informal email writing practice.",
    icon: <FaMailBulk className="w-10 h-10 text-yellow-400" />,
    link: "/writings/emails",
  },
  {
    title: "Letters",
    description: "Friendly and official letter writing guidance.",
    icon: <SlEnvolopeLetter className="w-10 h-10 text-red-400" />,
    link: "/writings/letters",
  },
  {
    title: "Applications",
    description: "Learn to write formal applications effectively.",
    icon: <FaEdit className="w-10 h-10 text-pink-400" />,
    link: "/writings/applications",
  },
  {
    title: "Curriculum Vitae (CV)",
    description: "Learn to write effective CVs.",
    icon: <TbFileCv className="w-10 h-10 text-pink-400" />,
    link: "/writings/cv",
  },
  {
    title: "Stories",
    description: "Creative story writing to build imagination.",
    icon: <TbBrandStorybook className="w-10 h-10 text-purple-400" />,
    link: "/writings/stories",
  },
  {
    title: "Dialogue Writing",
    description: "Learn to write engaging dialogues effectively.",
    icon: <FaPersonMilitaryToPerson className="w-10 h-10 text-pink-400" />,
    link: "/writings/dialogue-writing",
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
              className="bg-[#0f1b33] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex justify-center items-center gap-4 mb-2">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <Link
                to={item?.link}
                className="inline-block bg-orange-600 hover:bg-white px-6 py-2 rounded-lg text-sm font-medium transition hover:text-orange-600"
              >
                Details <FaArrowRight className="inline-block ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
