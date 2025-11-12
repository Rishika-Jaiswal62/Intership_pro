
import React, { useState } from 'react';
import Moutant from '../assets/Mount.webp';
import Inside from '../assets/mithonDam.webp';
import Place from '../assets/palash.webp';
import Room1 from "../assets/room1.jpg";
import Room2 from "../assets/room2.jpg";
import Roo1 from "../assets/roo1.jpg";
import Hero from "../assets/hero.webp";
import About from "../assets/About.jpg";
import hall from "../assets/hall.jpg";
import CenterHeading from '../Component/CenterHeding';


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Image data with category
  const images = [
    { id: 1, src: Moutant, category: 'Mountains'},
    { id: 2, src: Hero, category: 'Mountains' },
    { id: 3, src: Inside, category: 'Outside' },
    { id: 4, src: Place, category: 'Outside' },
    { id: 5, src: Room1, category: 'Bedroom' },
    { id: 6, src: Room2, category: 'Bedroom' },
    { id: 7, src: Roo1, category: 'Bedroom' },
    { id: 8, src: About, category: 'Outside' },
    { id: 9, src: hall, category: 'Hall' },
     
  ];

  //  Filter images based on dropdown selection
  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
     <section  id='gallery' className=''>
    <div  className="container mx-auto  text-center ">
    <CenterHeading title="Our Gallery" />

      {/* Dropdown Menu */}
       <div className="flex justify-end mb-3">
        <select
          className="border border-gray-300 p-2  mr-12 sm:mr-4 md:mr-5 lg:mr-12 mb-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Mountains">Mountains</option>
          <option value="Outside">Outside</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Hall">Hall</option>
        </select>
      </div>

      {/*  Image Gallery */}
     
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-3  gap-6 px-4 lg:px-12 ">
        {filteredImages.map((img) => (
          <div key={img.id} className=" rounded-lg shadow-md w-100%">
            <img
              src={img.src}
              alt={img.category}
              className="w-full h-96 transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      </div>
</section>
    
  );
};

export default Gallery;

