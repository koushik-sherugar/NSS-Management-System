import React from "react";
import Cta from "./CTA";
import Features from "./Features";
import Header from "./Header";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Navbar />

      <Header />
      <Features />
      <Cta />
    </div>
  );
};

export default Home;
