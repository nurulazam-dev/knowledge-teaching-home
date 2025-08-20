import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Unlock Your <span className="text-primary">Knowledge</span> <br />
            Anytime, Anywhere 🚀
          </h1>
          <p className="text-lg text-gray-600">
            Learn new skills, explore curated courses, and grow your career with
            our expert-led lessons.
          </p>
          <div className="flex gap-4">
            <Link to="/courses" className="btn btn-primary btn-lg">
              Explore Courses
            </Link>
            <Link to="/about" className="btn btn-outline btn-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://undraw.co/api/illustrations/learning.svg"
            alt="Hero Illustration"
            className="w-full max-w-md drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
