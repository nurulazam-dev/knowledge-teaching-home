import { motion } from "framer-motion";
import {
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
      {/* Title */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          About <span className="text-orange-500">Knowledge Teaching Home</span>
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-gray-300 text-lg">
          We are a trusted{" "}
          <span className="text-indigo-400 font-semibold">
            private coaching center{" "}
          </span>
          guiding students of{" "}
          <span className="text-orange-400">
            School, Madrasha & College (Class 6 to 12)
          </span>{" "}
          with structured lessons, personal care, and proven results.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-[#101b33] shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
            <FaBookOpen /> Our Mission
          </h2>
          <p className="mt-3 text-gray-300">
            To make learning{" "}
            <span className="text-indigo-400 font-semibold">
              clear, structured, and enjoyable{" "}
            </span>
            — so every student understands deeply, practices regularly, and
            gains confidence to perform their best.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl bg-[#101b33] shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-indigo-400 flex items-center gap-2">
            <FaGraduationCap /> Our Vision
          </h2>
          <p className="mt-3 text-gray-300">
            To be the most trusted{" "}
            <span className="text-orange-400">learning home</span> in
            Bangladesh, where students develop strong academics, discipline, and
            a growth mindset for higher studies and life.
          </p>
        </motion.div>
      </section>

      {/* Subjects */}
      <section className="mt-16 px-6 lg:px-10 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Subjects We Teach</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              t: "English",
              icon: <FaBookOpen />,
              c: "from-orange-500 to-orange-600",
            },
            { t: "ICT", icon: <FaUsers />, c: "from-indigo-500 to-indigo-600" },
            {
              t: "Accounting",
              icon: <FaGraduationCap />,
              c: "from-orange-400 to-orange-500",
            },
            {
              t: "Finance",
              icon: <FaBookOpen />,
              c: "from-indigo-400 to-orange-500",
            },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`rounded-2xl p-[1px] bg-gradient-to-r ${s.c}`}
            >
              <div className="h-full w-full rounded-2xl p-6 bg-[#0f1a2f] flex flex-col items-center text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-lg font-semibold">{s.t}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Concept-first lessons, examples & regular practice.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-16 px-6 lg:px-10 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">
          Why Parents & Students Choose Us
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Small batches for individual attention",
            "Clear notes & board-focused preparation",
            "Regular homework, quizzes & feedback",
            "Friendly mentors and safe environment",
            "Parent updates & progress tracking",
            "Convenient location in East Raozan",
          ].map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 bg-[#101b33] rounded-2xl border border-gray-700 shadow-md flex items-start gap-2"
            >
              <FaCheckCircle className="text-orange-400 mt-1" />
              <span className="text-gray-300">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-20">
        <div className="bg-[#101b33] border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-400">
                Visit or Reach Us
              </h3>
              <div className="mt-2 flex items-center">
                <FaMapMarkerAlt className="inline-block mr-1 text-red-600" />{" "}
                <p className="text-gray-300">East Raozan, Raozan, Chattogram</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://facebook.com/KnowledgeTeachingHome"
                  className="px-4 py-1 rounded-lg border border-orange-500 text-blue-600  hover:bg-orange-500 hover:text-white transition flex items-center gap-1"
                >
                  <FaFacebook className="inline-block h-5 w-5" />
                  <p className="text-gray-300">Facebook</p>
                </a>
                <a
                  href="https://youtube.com/KnowledgeTeachingHome"
                  className="px-4 py-2 rounded-lg border border-indigo-500 text-red-600 hover:bg-indigo-500 hover:text-white transition flex items-center gap-1"
                >
                  <FaYoutube className="inline-block h-5 w-5" />
                  <p className="text-gray-300">YouTube</p>
                </a>
                <a
                  href="https://instagram.com/KnowledgeTeachingHome"
                  className="px-4 py-2 rounded-lg border border-orange-400 text-pink-600 hover:bg-orange-400 hover:text-white transition flex items-center gap-1"
                >
                  <FaInstagram className="h-5 w-5" />
                  <p className="text-gray-300">Instagram</p>
                </a>
              </div>
            </div>
            <div className="text-right">
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-indigo-500 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
