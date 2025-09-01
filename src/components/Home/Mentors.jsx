import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaUserCircle,
} from "react-icons/fa";

const mentors = [
  {
    id: 1,
    name: "Mohammad Nurul Azam",
    subject: "Mathematics, Accounting and Finance Mentor",
    image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
    bio: "Expert in Math, Accounting & Finance with 12+ years of experience.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Fatema Jannat",
    subject: "English Mentor",
    // image: "https://i.ibb.co/9WnMMr7/mentor2.jpg",
    bio: "Specialist in English Literature & Grammar, guiding students for SSC & HSC.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Abdul Karim",
    subject: "Science and ICT Mentor",
    // image: "https://i.ibb.co/jD3tCd4/mna.png",
    bio: "Dedicated to Physics, Chemistry , Biology & ICT with 10+ years of teaching.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Mentors = () => {
  return (
    <section className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Meet Our <span className="text-orange-500">Mentors</span>
        </motion.h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Our experienced mentors guide students from Class 6 to Class 12,
          covering all subjects including School, Madrasha & College levels.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {mentors?.map((mentor, index) => (
            <motion.div
              key={mentor?.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#0f1e38] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              <div className="relative">
                <div className="flex justify-center items-center">
                  {mentor?.image ? (
                    <img
                      src={mentor?.image}
                      alt={mentor?.name}
                      className="w-60 h-60  transform group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <FaUserCircle className="w-60 h-60 text-gray-500 py-5 transform group-hover:scale-105 transition duration-500" />
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-4 transition">
                  <a
                    href={mentor?.socials?.facebook}
                    className="bg-white text-blue-600 p-2 rounded-full hover:bg-orange-500 hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={mentor?.socials?.instagram}
                    className="bg-white text-pink-700 p-2 rounded-full hover:bg-orange-500 hover:text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={mentor.socials.linkedin}
                    className="bg-white text-blue-700 p-2 rounded-full hover:bg-orange-500 hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="p-6 pt-1 text-center">
                <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                <p className="text-orange-400 mb-2">{mentor.subject}</p>
                <p className="text-gray-300 text-sm">{mentor.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
