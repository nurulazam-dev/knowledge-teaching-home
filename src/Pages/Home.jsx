import React from "react";
import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import Mentors from "../components/Home/Mentors";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import StudentSuccess from "../components/Home/StudentSuccess";
import Testimonials from "../components/Home/Testimonials";
import Gallery from "../components/Home/Gallery";
import AdmissionCTA from "../components/Home/AdmissionCTA";
import FAQSection from "../components/Home/FAQSection";
import Contact from "./Contact";
import About from "./About";
import AdmissionProcess from "../components/Home/AdmissionProcess";

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Mentors />
      <WhyChooseUs />
      <About />
      <StudentSuccess />
      <AdmissionProcess />
      <Testimonials />
      <Gallery />
      <AdmissionCTA />
      <FAQSection />
      <Contact />
    </>
  );
};

export default Home;
