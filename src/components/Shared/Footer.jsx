import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">Knowledge Teaching Home</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            A trusted coaching center where we teach and guide students from
            <span className="font-medium text-white">
              {" "}
              class 3 to class 12{" "}
            </span>
            (School, Madrasha & College) with care and dedication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/mentors" className="hover:text-orange-400 transition">
                Our Mentors
              </a>
            </li>
            <li>
              <a href="/admission" className="hover:text-orange-400 transition">
                Admission
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="mt-2 flex items-center">
            <FaMapMarkerAlt className="inline-block mr-1 text-red-600" />{" "}
            <p className="text-gray-400">East Raozan, Raozan, Ctg.</p>
          </div>
          <div className="mt-2 flex items-center">
            <FaPhoneAlt className="inline-block mr-1 text-red-600" />{" "}
            <p className="text-gray-400">+880 1881-131834</p>
          </div>

          <div className="mt-2 flex items-center">
            <FiMail className="inline-block mr-1 text-red-600" />{" "}
            <p className="text-gray-400">nurulazam.dev@gmail.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="/"
              className="p-3 rounded-full bg-[#1d2a44] hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="p-3 rounded-full bg-[#1d2a44] hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="p-3 rounded-full bg-[#1d2a44] hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="p-3 rounded-full bg-[#1d2a44] hover:bg-orange-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Knowledge Teaching Home. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
