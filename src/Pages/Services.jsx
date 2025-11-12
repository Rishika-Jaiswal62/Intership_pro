
import React from 'react'
import CenterHeading from '../Component/CenterHeding';
import service from "../assets/service.jpg";
import { RiShieldStarLine } from "react-icons/ri";
import { Ri24HoursFill } from "react-icons/ri";
import { IoRestaurantSharp } from "react-icons/io5";
import { RiMap2Line } from "react-icons/ri";

const Services = () => {
  return (
    <section  id='servies' className="py-16 bg-gray-50 container mx-auto">
      {/* Center Heading */}
      <div className="container mx-auto px-6">
        <CenterHeading title="Our Services" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10">

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={service}
              alt="Service"
              className="shadow-lg w-[650px] h-[520px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 items-center">
            {/* <p>SERVICES</p> */}
            <h2 className='text-gray-800 text-5xl font-bold'>Strive Only For The <br /> Best.</h2>
            <div className='flex items-center'>
              <span className='bg-blue-300 p-4 rounded-full text-2xl mr-4'>
                <RiShieldStarLine />
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">accordion
                High Class Security</h2>
            </div>

            <div className='flex items-center'>
              <span className=' bg-pink-300 p-4 rounded-full text-2xl mr-4'>
                <Ri24HoursFill />
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">24 Hours Room Service</h2>
            </div>

            <div className='flex items-center'>
              <span className='bg-yellow-200 p-4 rounded-full text-2xl mr-4'>
                <IoRestaurantSharp />
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">Restaurant</h2>
            </div>

            <div className='flex items-center'>
              <span className=' bg-green-300 p-4 rounded-full text-2xl mr-4'>
                <RiMap2Line />
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">Tourist Guide Support</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly items-center text-center w-full lg:max-w-5xl  mx-auto my-10 p-6 shadow-2xl rounded-xl gap-6">

          <div className=''>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">100+</h2>
            <p className="text-gray-700 my-2 text-sm sm:text-base">Bookings Completed</p>
          </div>

          <div className=''>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">50+</h2>
            <p className="text-gray-700 my-2 text-sm sm:text-base">Happy Clients</p>
          </div>

        </div>
        <div>
        </div>
      </div>
    </section>
  )
}

export default Services;


