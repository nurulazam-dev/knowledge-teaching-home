import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or want to enroll? Contact us through any of the
            methods below, and we’ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-2"
          >
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-orange-500 text-2xl" />
              <span className="text-lg">+880 1881 131834</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-orange-500 text-2xl" />
              <span className="text-lg">nurulazam.dev@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-orange-500 text-2xl" />
              <span className="text-lg">info@knowledge-teaching-home.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
              <span className="text-lg">
                East Raozan, Rashidar Para, Raozan, Ctg.
              </span>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6105948733726!2d90.41251817508397!3d23.874036284212033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c400bd8d7f19%3A0x3a6b1e932d65d1b3!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl border-0 shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-bold text-center text-[#0a1629]">
              Send Us a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
