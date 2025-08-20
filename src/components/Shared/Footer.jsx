import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-r from-violet-700 via-indigo-700 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h4 className="text-2xl font-bold tracking-tight mb-2">
            Knowledge Teaching Home
          </h4>
          <p className="text-white/90 mb-3">
            Coaching for Classes 3–12 • English • ICT • Accounting • Finance
          </p>
          <p className="text-white/80 flex items-center gap-2">
            <span role="img" aria-label="Location">
              📍
            </span>
            East Raozan, Raozan, Chattogram
          </p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="/courses"
                className="hover:text-orange-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-orange-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/KnowledgeTeachingHome"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 px-3 py-2 bg-white/90 text-violet-700 rounded shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-white"
            >
              <FaFacebookF />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://instagram.com/KnowledgeTeachingHome"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 px-3 py-2 bg-white/90 text-orange-700 rounded shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-white"
            >
              <FaInstagram />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-white/80 py-4 border-t border-white/20 text-sm">
        © {new Date().getFullYear()} Knowledge Teaching Home. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
