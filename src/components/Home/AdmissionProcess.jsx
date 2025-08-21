import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaClipboardList,
  FaBookOpen,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-4xl text-indigo-400" />,
    title: "Step 1: Registration",
    description:
      "Fill out the online admission form with student details and select your class level.",
  },
  {
    icon: <FaClipboardList className="text-4xl text-orange-400" />,
    title: "Step 2: Assessment",
    description:
      "Appear for a placement test to understand your current academic level and strengths.",
  },
  {
    icon: <FaBookOpen className="text-4xl text-violet-400" />,
    title: "Step 3: Counseling",
    description:
      "Our mentors will guide you to choose the right course and study plan for your needs.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-green-400" />,
    title: "Step 4: Enrollment",
    description:
      "Confirm your admission by completing the payment process and joining your classes.",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Admission Process
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Join{" "}
          <span className="text-indigo-400 font-semibold">
            Knowledge Teaching Home
          </span>{" "}
          easily by following these four simple steps.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0f1d36] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
