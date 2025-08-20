const Footer = () => {
  return (
    <footer className="mt-16 text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold">Knowledge Teaching Home</h4>
          <p className="mt-2 text-white/90">
            Coaching for Classes 3–12 • English • ICT • Accounting • Finance
          </p>
          <p className="mt-2 text-white/80">
            📍 East Raozan, Raozan, Chattogram
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Follow</h5>
          <div className="mt-3 flex gap-3">
            <a
              href="https://facebook.com/KnowledgeTeachingHome"
              className="btn btn-sm bg-white text-violet-700 hover:bg-gray-100"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/KnowledgeTeachingHome"
              className="btn btn-sm bg-white text-orange-700 hover:bg-gray-100"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-white/90 py-4 border-t border-white/20">
        © {new Date().getFullYear()} Knowledge Teaching Home. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
