import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Title */}
      <section className="text-center py-14 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700 bg-clip-text text-transparent">
            About Knowledge Teaching Home
          </span>
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-gray-600">
          We are a dedicated coaching center guiding students from{" "}
          <strong>Class 3 to Class 12</strong> to build strong fundamentals and
          excel in school and board examinations.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white rounded-2xl shadow-sm border"
        >
          <h2 className="text-2xl font-bold text-violet-600">Our Mission</h2>
          <p className="mt-3 text-gray-700">
            To make learning clear, structured, and enjoyable—so every student
            understands concepts deeply, practices regularly, and gains
            confidence to perform their best.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 bg-white rounded-2xl shadow-sm border"
        >
          <h2 className="text-2xl font-bold text-indigo-600">Our Vision</h2>
          <p className="mt-3 text-gray-700">
            To be a trusted learning home in Bangladesh where students develop
            strong academics, discipline, and a growth mindset for higher
            studies and life.
          </p>
        </motion.div>
      </section>

      {/* Subjects */}
      <section className="mt-14 px-6 lg:px-10 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Subjects We Teach
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "English", c: "from-violet-600 to-violet-700" },
            { t: "ICT", c: "from-indigo-600 to-indigo-700" },
            { t: "Accounting", c: "from-orange-700 to-orange-600" },
            { t: "Finance", c: "from-violet-600 to-orange-700" },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`rounded-2xl p-[1px] bg-gradient-to-r ${s.c}`}
            >
              <div className="h-full w-full rounded-2xl p-5 bg-white">
                <p className="text-lg font-semibold text-gray-800">{s.t}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Concept-first lessons, examples, and regular practice.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-14 px-6 lg:px-10 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Why Parents & Students Choose KTH
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Small batches for individual attention",
            "Clear notes & board-focused preparation",
            "Regular homework, quizzes & feedback",
            "Friendly mentors and safe environment",
            "Parent updates & progress tracking",
            "Convenient location in East Raozan",
          ].map((point) => (
            <div
              key={point}
              className="p-5 bg-white rounded-2xl border shadow-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700 inline-block mr-2" />
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <div className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Visit or Reach Us</h3>
              <p className="mt-2 text-gray-700">
                📍 East Raozan, Raozan, Chattogram
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://facebook.com/KnowledgeTeachingHome"
                  className="btn btn-sm border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/KnowledgeTeachingHome"
                  className="btn btn-sm border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://instagram.com/KnowledgeTeachingHome"
                  className="btn btn-sm border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="text-right">
              <a
                href="/contact"
                className="btn text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700"
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
