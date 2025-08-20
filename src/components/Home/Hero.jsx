import { motion } from "framer-motion";
import BannerImg from "../../assets/logo/logo.png";

const Hero = () => {
  return (
    <section className="pt-28 bg-gradient-to-br from-violet-600 via-indigo-600 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center py-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Coaching for{" "}
            <span className="underline decoration-white/60">Classes 3–12</span>
            <br />
            at{" "}
            <span className="bg-white/20 rounded px-2">
              Knowledge Teaching Home
            </span>
          </h1>
          <p className="text-white/90 text-lg">
            Master the core subjects with caring mentors. We specialize in
            <span className="font-semibold"> English</span>,{" "}
            <span className="font-semibold">ICT</span>,{" "}
            <span className="font-semibold">Accounting</span>, and{" "}
            <span className="font-semibold">Finance</span>. Located in East
            Raozan, Raozan, Chattogram.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/courses"
              className="btn text-white bg-black/20 hover:bg-black/30 border-0"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="btn bg-white text-violet-700 hover:bg-gray-100 border-0"
            >
              Contact Us
            </a>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/15">
              Small Batches
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15">
              Concept-first Teaching
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15">
              Board Exam Focus
            </span>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src={BannerImg}
            alt="Knowledge Teaching Home banner"
            className="w-full max-w-lg rounded-2xl shadow-2xl ring-1 ring-white/30"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
