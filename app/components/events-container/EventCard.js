// components/EventCard.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";

const EventCard = () => {
  return (
    <Link href="/event/new" >
    <div className="flex h-[200px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-[200px] md:w-[300px] relative overflow-hidden">
          <img
           src="https://plus.unsplash.com/premium_photo-1726761660323-852ca794ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coastal Groove Night"
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            loading="lazy"
           />
          <div className="absolute top-2 md:top-4 left-2 md:left-4 flex gap-1 md:gap-2">
             <span className="bg-black/80 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">21+</span>
            <span className="bg-[#121212]/80 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">$35 - 85</span>
          </div>
      </div>
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
        <div className="space-y-2 md:space-y-4">
          <div className="block">
            <h3 className="font-space-grotesk text-lg md:text-2xl font-bold text-gray-900">

              Coastal Groove Night
            </h3>
          </div>
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="bg-gray-100 text-gray-800 px-2 md:px-4 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">House</span>
            <span className="text-gray-600 text-xs md:text-base font-medium flex items-center gap-1 md:gap-2">
            <CiLocationOn />
              W Bali
            </span>
             <span className="text-gray-500 text-xs md:text-sm flex items-center gap-1">
                
              <FaArrowAltCircleRight />
              Kuta
             </span>
          </div>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button className="px-3 md:px-6 py-1.5 md:py-2 rounded-md font-space-grotesk text-xs md:text-base text-center bg-black text-white">
              Tickets
          </button>
          <button
              className="px-3 md:px-6 py-1.5 md:py-2 bg-[#FFD700] text-black rounded-md hover:bg-[#FFC700] transition-all duration-300 font-space-grotesk text-xs md:text-base hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-1 md:gap-2"
            >
           <i className="fas fa-play text-xs md:text-sm" aria-hidden="true"></i>
             Listen
         </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default EventCard;