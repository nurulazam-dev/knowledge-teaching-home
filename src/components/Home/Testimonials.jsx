import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Class 10 Student",
    feedback:
      "Knowledge Teaching Home helped me improve my math skills tremendously. The mentors are very supportive and explain topics in the easiest way possible.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Mahmud Hasan",
    role: "Class 12 Student",
    feedback:
      "Thanks to this coaching center, I achieved an A+ in Physics. The interactive sessions and practice tests made learning so much easier.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Parent",
    feedback:
      "My daughter’s confidence has grown after joining Knowledge Teaching Home. The personalized guidance really makes a difference.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 4,
    name: "Rakibul Islam",
    role: "Class 8 Student",
    feedback:
      "The teachers here are amazing! They always motivate us and make learning fun with real-life examples.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold mb-4"
        >
          What Our Students & Parents Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 mb-12"
        >
          Real experiences and success stories from students and guardians
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
              <p className="text-gray-200 mb-6 italic">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-500"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
