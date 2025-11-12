
import React from "react";
import Navbar from "./Navbar";

const HeroSection = ({
  bgImage,
  subtitle,
  title,
  buttonText,
  showButton = true,
  height = "h-screen",
 
}) => {
  return (
    <section className="w-full">
    <div
      className={`relative w-full bg-center bg-cover  ${height}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar on top */}
      <Navbar />

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-5 sm:px-8 md:px-12">
        <div className="max-w-[800px]">
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl tracking-wide uppercase text-white">
              {subtitle}
            </p>
          )}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 text-white leading-tight whitespace-pre-line">
            {title}
          </h1>
          {showButton && (
            <button className="mt-6 bg-blue-500 text-white text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-10 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;


