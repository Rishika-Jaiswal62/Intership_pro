

import aboutImg from "../assets/About.jpg";
import Button from "../Component/Button";
import React from "react";

const About = () => {
  return (
    <section   id="about"  className="w-full min-h-screen bg-gray-50 pt-16  mx-auto container">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        
        {/* Image Section */}
        <div className="flex   justify-center sm:justify-center lg:justify-start">
          <img
            src={aboutImg}
            alt="About"
            className=" sm:w-[30%] md:w-[110%] lg:w-[80%] shadow-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-5           md:space-y-2 text-center md:text-left px-2">
          <p className="text-sky-500 font-semibold text-lg">About Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            The Best Holidays Start Here!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto md:mx-0">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>

          <div className="mt-4 sm:mt-0">
            <Button content="Book Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;






