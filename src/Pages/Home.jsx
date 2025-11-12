
import React from "react";
import HeroSection from "../Component/HeroSection";
import hero from "../assets/hero.webp"

const Home = () => {
  return (

    <section   id="/" className="">
      <HeroSection
        bgImage={hero}
        subtitle="Simple - Unique - Friendly"
        title={`Make Yourself At Home\nIn Our Guest House`}
        buttonText="Book Now"
        height={`hero-container`} // full height
         width={`w-full`}
      />
    </section>
  );
};

export default Home;



