
import React from 'react'
import Button from './Button'
import insta from "../assets/instagram.png";
import youtub from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <section className='mt-6'>
    <footer className='bg-black text-white py-12 w-full'>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center ">

        {/* Logo & Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="font-semibold py-2 text-lg">Kingsukh Guest House</h4>
          <p className="text-sm sm:text-base">
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
          <Button content="Send Message" className="px-3 py-2 text-sm w-40 mt-4 mx-auto sm:mx-0" />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="font-semibold py-2 text-lg">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="">Browse Destinations</a></li>
            <li><a href="">Special Offers & Packages</a></li>
            <li><a href="">Room Types & Amenities</a></li>
            <li><a href="">Travel Tips & Guides</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="font-semibold py-2 text-lg">OUR SERVICES</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="">Concierge Assistance</a></li>
            <li><a href="">Flexible Booking Options</a></li>
            <li><a href="">Airport Transfers</a></li>
            <li><a href="">Wellness & Recreation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="font-semibold py-2 text-lg">CONTACT US</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</li>
            <li>Email: kkghosh0099@gmail.com</li>
            <li>Phone: +91 9007062180</li>
          </ul>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <img src={insta} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-all duration-200" />
            <img src={youtub} alt="YouTube" className="w-6 h-6 hover:scale-110 transition-all duration-200" />
            <img src={twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition-all duration-200" />
            <img src={facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition-all duration-200" />
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Kingsukh Guest House. All Rights Reserved.
      </div>
    </footer>
    </section>
  )

}

export default Footer;
