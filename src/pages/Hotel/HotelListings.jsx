import React from "react";
import Navbar from "../../components/common/Navbar";
import GeneralCard from "../Home/HomeSearch/Generalcard";

const HotelListings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search Results</h2>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render multiple hotel cards */}
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <GeneralCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelListings;


