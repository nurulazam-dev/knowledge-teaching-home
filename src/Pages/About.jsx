import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 lg:px-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-extrabold text-primary"
        >
          About Knowledge Teaching Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          <span className="font-semibold text-primary">
            Knowledge Teaching Home (KTH)
          </span>{" "}
          is a dedicated teaching platform and coaching center located in East
          Raozan, Chattogram. We provide academic support for students from{" "}
          <strong>Class 3 to Class 12</strong>, helping them achieve excellence
          in both school and board exams.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100 px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To provide high-quality education and guidance to students by
              focusing on conceptual learning, problem-solving skills, and
              confidence-building. We aim to create a positive learning
              environment where every student can thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To become a leading coaching institute in Bangladesh that empowers
              young minds to excel academically and personally, preparing them
              for higher education and future challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 lg:px-24 text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "English",
              desc: "Improve grammar, writing & speaking skills.",
            },
            {
              title: "ICT",
              desc: "Master computer fundamentals & programming.",
            },
            {
              title: "Accounting",
              desc: "Build strong foundation in accounting principles.",
            },
            {
              title: "Finance",
              desc: "Learn financial concepts for academic & real-world use.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & Social */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">📍 East Raozan, Raozan, Chattogram</p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://facebook.com/KnowledgeTeachingHome"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="w-7 h-7 hover:scale-110 transition" />
          </a>
          <a
            href="https://twitter.com/KnowledgeTeachingHome"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="w-7 h-7 hover:scale-110 transition" />
          </a>
          <a
            href="https://instagram.com/KnowledgeTeachingHome"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="w-7 h-7 hover:scale-110 transition" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
