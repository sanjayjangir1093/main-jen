import React, { useEffect, useState } from "react";
import HomeSearchLayout from "../Home/HomeSearch/index";
import GeneralCard from "./HomeSearch/Generalcard";
import homePage from "../../assets/Images/homepage.jpg";
import { post } from "../../services/services";
import { ApiURL } from "../../services/apiConstants";
import { ErrorToast } from "../../utils/AppToast";
import Label from "../../components/common/Lable";
import Navbar from "../../components/common/Navbar";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const HomePage = () => {
  const [loader, set_loader] = useState(false);
  const [errors, set_errors] = useState([]);
  const [cardDetails, set_carddetails] = useState([]);

  const HotelsView = async () => {
    set_loader(true);
    try {
      const FORM_DATA = new FormData();
      const res = await post(ApiURL.hotels_view, FORM_DATA);

      if (res?.status) {
        set_carddetails(res?.data);
      } else {
        ErrorToast("Card error:", "An error occurred during card loading!");
        set_errors(res?.errors);
      }
    } catch (error) {
      ErrorToast("Card error:", "An error occurred during card loading!");
    } finally {
      set_loader(false);
    }
  };

  useEffect(() => {
    HotelsView();
  }, []);

  return (
    <div className="w-full">
      {/* <Navbar /> */}

      {/* Hero Section with Background */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${homePage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hotel Search Component */}
        <div className="absolute bottom-[-80px] w-full max-w-4xl mx-auto">
          <HomeSearchLayout />
        </div>
      </div>

      {/* Top Hotels Section */}
      <div className="mt-24 px-6 md:px-16">
        <h2 className="text-2xl font-semibold mb-4">Top Hotels</h2>

        {/* Hotel Cards Grid */}
        {cardDetails?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardDetails.map((card, index) => (
              <div
                key={index}
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px] h-auto min-w-[250px] max-w-[400px] rounded-lg border border-gray-300 p-2 shadow-md"
              >
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Large Image (First Image) */}
                  {card?.image?.length > 0 && (
                    <div className="col-span-2">
                      <img
                        src={card.image[0]}
                        alt="Hotel Main"
                        className="rounded-lg w-full h-[250px] object-cover shadow-md"
                      />
                    </div>
                  )}

                  {/* Small Images (Remaining) */}
                  {card?.image?.slice(1).map((img, imgIndex) => (
                    <div key={imgIndex} className="w-full">
                      <img
                        src={img}
                        alt={`Hotel view ${imgIndex + 1}`}
                        className="rounded-lg w-full h-[120px] object-cover shadow-sm"
                      />
                    </div>
                  ))}
                </div>

                {/* Hotel Info */}
                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold">{card?.hotel_name}</h2>
                    <Label
                      text={
                        <>
                          {card?.star_rating}
                          <FaStar className="inline w-3 h-3 text-yellow-500 mx-0.5" style={{ marginTop: "-2.5px" }} />
                          Hotel
                        </>
                      }
                      className="bg-[#FFFBE6] text-black/45 border-[1px] border-[#FFE58F] px-2 py-1 text-xs"
                    />
                    <Label
                      text={card?.user_rating}
                      className="bg-[#FFFBE6] text-[#000000] border border-[#B7EB8F] px-2 py-1 text-xs"
                    />
                  </div>
                  <p className="flex items-center text-gray-600 text-sm mt-2">
                    <FaMapMarkerAlt className="text-gray-500 mr-1" /> {card?.address}
                  </p>
                </div>

                {/* Room Types */}
                <div className="flex gap-2 mt-4">
                  {card?.room_types?.map((type, typeIndex) => (
                    <Label
                      key={typeIndex}
                      text={type}
                      className="bg-purple-100 text-purple-700 border border-purple-500 px-3 py-1 text-xs font-medium"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
