import { motion } from "framer-motion";
import {
  FaUserEdit,
  FaClipboardList,
  FaChalkboardTeacher,
  FaCheckCircle,
} from "react-icons/fa";

const AdmissionProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserEdit className="text-2xl text-indigo-400" />,
      title: "Step 1: Registration",
      description:
        "Fill out the admission form with accurate details to start your journey.",
    },
    {
      id: 2,
      icon: <FaClipboardList className="text-2xl text-orange-400" />,
      title: "Step 2: Assessment Test",
      description:
        "Appear for our entrance assessment to evaluate your current level.",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-2xl text-violet-400" />,
      title: "Step 3: Counseling",
      description:
        "Meet with our mentors to discuss your academic goals and subjects.",
    },
    {
      id: 4,
      icon: <FaCheckCircle className="text-2xl text-green-400" />,
      title: "Step 4: Confirmation",
      description:
        "Complete the admission process and start attending your classes.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Admission Process
        </h2>
        <p className="text-gray-300">
          Follow these simple steps to join{" "}
          <span className="text-indigo-400 font-semibold">
            Knowledge Teaching Home
          </span>
          .
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 rounded"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Content Card */}
              <div className="bg-[#101b37] shadow-lg rounded-2xl p-6 w-80 md:w-96 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span>{step.icon}</span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>

              {/* Step Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg z-20">
                <span className="text-white font-bold">{step.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
