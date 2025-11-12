



import React from "react";
import CenterHeading from '../Component/CenterHeding';
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import { FaHeart } from "react-icons/fa6";
import { RiPaintFill } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";

const Rooms = () => {
 
  const rooms = [
    {
      id: 1,
      title: "Cozy Haven Room",
      desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for relaxation.",
       rate: " Rs. 1000/night",
      image: room1,
    },
    {
      id: 2,
      title: "Spacious Serenity Suite",
      desc: "Indulge in luxury and space in our Serenity Suite, where calm meets elegance.",
       rate: " Rs. 1500/night",
      image: room2,
    },
  ];

  return (
    <section id="room"
    className="flex flex-col items-center bg-gray-50 px-6  m-auto py-16">
      {/* 🔹 Center Heading */}
      <CenterHeading   title='our Room' />

      {/* 🔹 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1400px] w-full">
        
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center"
          >

              <div className="relative w-full">
            {/* Image */}
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-72 relative object-cover"
             

            />
            {/* icon */}
            <div className="absolute bottom-3 right-3 flex gap-3 sm:gap-4">

             <span className="  bg-blue-300 p-3 rounded-full text-xl sm:text-2xl hover:bg-blue-400 transition ">   <FaHeart   className="hover:text-white"/></span> 

             <span className="bg-blue-300 p-3 rounded-full text-xl sm:text-2xl hover:bg-blue-400 transition"> <RiPaintFill   className="hover:text-white"/></span> 

             <span className="bg-blue-300 p-3 rounded-full text-xl sm:text-2xl hover:bg-blue-400 transition"> <RiShieldStarLine  className="hover:text-white"/></span>
              </div>
               </div>
              
            {/* Text */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {room.title}
              </h2>
              <p className="text-gray-600 mb-4">{room.desc}</p>

              {/* <div className="flex items-center justify-between"> */}
              <h5 className="text-gray-500 pb-2">Starting from <span className="text-black">{room.rate}</span></h5>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                See More
              </button>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
