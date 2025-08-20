import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBookReader,
  FaUserGraduate,
  FaHandsHelping,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
    title: "Experienced Mentors",
    description:
      "Our highly qualified teachers guide students with proven teaching methods for all classes (3–12).",
  },
  {
    id: 2,
    icon: <FaBookReader className="text-4xl text-indigo-500" />,
    title: "Personalized Learning",
    description:
      "We focus on individual strengths and weaknesses, ensuring that each student learns effectively.",
  },
  {
    id: 3,
    icon: <FaUserGraduate className="text-4xl text-violet-500" />,
    title: "Result-Oriented Approach",
    description:
      "Our structured coaching ensures top performance in school, madrasha, and college exams.",
  },
  {
    id: 4,
    icon: <FaHandsHelping className="text-4xl text-green-500" />,
    title: "Supportive Environment",
    description:
      "We provide a friendly and supportive learning space where students feel confident and motivated.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Why<span className="text-orange-500"> Choose Us?</span>
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At{" "}
          <span className="text-indigo-400 font-semibold">
            Knowledge Teaching Home
          </span>
          , we are dedicated to building strong academic foundations for
          students from class 3 to class 12.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f1c33] hover:bg-[#152445] transition-colors rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
