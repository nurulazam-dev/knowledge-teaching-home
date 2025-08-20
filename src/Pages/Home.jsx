import React from "react";
import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import Mentors from "../components/Home/Mentors";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import StudentSuccess from "../components/Home/StudentSuccess";
import Testimonials from "../components/Home/Testimonials";
import Gallery from "../components/Home/Gallery";
import AdmissionCTA from "../components/Home/AdmissionCTA";

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Mentors />
      <WhyChooseUs />
      <StudentSuccess />
      <Testimonials />
      <Gallery />
      <AdmissionCTA />
    </>
  );
};

export default Home;
