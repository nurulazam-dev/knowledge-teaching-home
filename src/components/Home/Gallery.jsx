import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    title: "Classroom Learning",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    title: "Group Study Session",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    title: "Cultural Program",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    title: "Outdoor Activities",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    title: "Workshop & Training",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    title: "Computer Lab Practice",
  },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gallery & Activities
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore moments from our classrooms, events, and activities that help
          students learn, grow, and shine beyond academics.
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
