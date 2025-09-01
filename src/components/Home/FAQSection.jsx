import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What classes do you offer at Knowledge Teaching Home?",
    answer:
      "We provide coaching for students from Class 6 to Class 12 across school, college, and madrasha curriculums with subject-wise expert mentors.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll online through our website or visit our office directly. Our admission team will guide you step by step.",
  },
  {
    question: "Do you offer individual or group classes?",
    answer:
      "We offer both group classes for interactive learning and individual mentoring sessions based on students' needs.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Fees vary depending on class level and subject. Please contact us or visit our office for detailed information.",
  },
  {
    question: "Do you provide progress reports?",
    answer:
      "Yes, we regularly assess student performance and share progress reports with parents/guardians to ensure continuous improvement.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-300 mb-12">
          Get quick answers to common questions about our admission process,
          classes, and learning methods.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-2xl bg-[#0e1b33] overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
