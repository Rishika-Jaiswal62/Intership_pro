
import React, { useState } from "react";
import HeroSection from "../Component/HeroSection";
import hero from "../assets/Mount.webp";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import insta from "../assets/instagram.png";
import youtub from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import Footer from "../Component/Footer.jsx";

const Contact = () => {
  // Step 1: Create state for inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //  Step 2: Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 3: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    console.log("✅ Message sent successfully:", formData);
    alert("🎉 Your message has been sent!");

    // Reset form after submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <HeroSection
        bgImage={hero}
        title={`Get In Touch`}
        showButton={false}
        height="h-[50vh]"
      />

      {/* Contact Info Section */}
      <div className="container mx-auto text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Connect With Us</h1>

        {/* Outer box with one shadow */}
        <div className="shadow-2xl rounded-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center container mx-auto">
            {/* Address */}
            <div className="flex flex-col items-center text-center">
              <FaLocationDot className="text-3xl mb-3 text-blue-500" />
              <h4 className="font-semibold py-2 text-lg">Address</h4>
              <span className="max-w-[250px] text-gray-700 text-sm md:text-base">
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </span>
            </div>

            {/* Call Us */}
            <div className="flex flex-col items-center text-center">
              <IoCall className="text-3xl mb-3 text-blue-500" />
              <h4 className="font-semibold py-2 text-lg">Call Us</h4>
              <span className="text-gray-700 text-sm md:text-base">
                +91 9007062180
              </span>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <MdEmail className="text-3xl mb-3 text-blue-500" />
              <h4 className="font-semibold py-2 text-lg">Email</h4>
              <span className="text-gray-700 text-sm md:text-base">
                kkghosh0099@gmail.com
              </span>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-center text-center">
              <h4 className="font-semibold py-3 text-lg">Follow Us</h4>
              <div className="flex gap-4">
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={youtub}
                  alt="YouTube"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + Map Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* ✅ Contact Form */}
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-white w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg shadow-xl p-12"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 p-2 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[125px] bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Send 
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="flex justify-center">
            <iframe
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg shadow-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501598139169!2d86.85721547601955!3d23.58633729505378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1762414071302!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;




