const Footer = () => {
  return (
    <footer className="bg-base-300 py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-primary">KnowledgeHub</h2>
          <p className="mt-3 text-gray-600">
            Empowering students and professionals with quality online learning
            and skill development resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-primary">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-primary">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold text-primary">Contact</h2>
          <p className="mt-3 text-gray-600">Email: support@knowledgehub.com</p>
          <p className="text-gray-600">Phone: +880 1234 567 890</p>
          <div className="flex gap-4 mt-4">
            <a href="/" className="text-gray-600 hover:text-primary">
              🌐
            </a>
            <a href="/" className="text-gray-600 hover:text-primary">
              🐦
            </a>
            <a href="/" className="text-gray-600 hover:text-primary">
              📘
            </a>
            <a href="/" className="text-gray-600 hover:text-primary">
              📸
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-400 pt-4 text-gray-600">
        © {new Date().getFullYear()} KnowledgeHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
