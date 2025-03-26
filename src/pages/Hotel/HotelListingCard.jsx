// import React from "react";
// import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
// import Label from "../../components/common/Lable";

// const HotelListingCard = () => {
//   const cardDetails = {
//     hotel_name: "ABC Hotel",
//     images: [
//       "https://via.placeholder.com/300x200", // Main Image
//       "https://via.placeholder.com/150", // Small Image 1
//       "https://via.placeholder.com/150", // Small Image 2
//     ],
//     star_rating: 4,
//     rating: "4.2/5",
//     address: "487, City Centre, Bedok, 541145.",
//     room_types: ["Standard", "Deluxe"],
//     amenities: ["Free Wi-Fi", "Swimming Pool", "Room Service", "Laundry & Ironing", "Gym"],
//     price: 15000,
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="w-full max-w-4xl bg-white rounded-lg border border-gray-300 p-4 shadow-md flex gap-4">
//         {/* Image Section */}
//         <div className="w-1/3">
//           <img
//             src={cardDetails.images[0]}
//             alt="Hotel Main"
//             className="rounded-lg w-full h-[200px] object-cover shadow-md"
//           />
//           <div className="grid grid-cols-2 gap-2 mt-2">
//             {cardDetails.images.slice(1).map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Hotel view ${index + 1}`}
//                 className="rounded-lg w-full h-[80px] object-cover shadow-sm"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Hotel Info Section */}
//         <div className="w-2/3 flex flex-col justify-between">
//           {/* Hotel Name & Rating */}
//           <div>
//             <h2 className="text-xl font-bold">{cardDetails.hotel_name}</h2>
//             <div className="flex items-center gap-3 mt-1">
//               <Label
//                 text={
//                   <>
//                     {cardDetails.star_rating}
//                     <FaStar className="inline w-3 h-3 text-yellow-500 mx-1" /> Hotel
//                   </>
//                 }
//                 className="bg-yellow-100 text-black/45 border border-yellow-300 px-2 py-1 text-xs"
//               />
//               <Label text={cardDetails.rating} className="bg-green-100 text-green-700 border border-green-300 px-2 py-1 text-xs" />
//             </div>
//             <p className="flex items-center text-gray-600 text-sm mt-2">
//               <FaMapMarkerAlt className="text-gray-500 mr-1" /> {cardDetails.address}
//             </p>

//             {/* Room Types */}
//             <div className="flex gap-2 mt-2">
//               {cardDetails.room_types.map((type, index) => (
//                 <Label
//                   key={index}
//                   text={type}
//                   className="bg-purple-100 text-purple-700 border border-purple-500 px-3 py-1 text-xs font-medium"
//                 />
//               ))}
//             </div>

//             {/* Amenities */}
//             <div className="flex flex-wrap gap-2 mt-2">
//               {cardDetails.amenities.map((amenity, index) => (
//                 <Label
//                   key={index}
//                   text={amenity}
//                   className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 text-xs font-medium"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Price & Booking Info */}
//           <div className="text-right">
//             <p className="text-gray-600 text-sm">4 Nights, 2 Adults, 1 Child</p>
//             <p className="text-2xl font-bold text-purple-700">${cardDetails.price}</p>
//             <p className="text-gray-500 text-sm">After taxes & fees</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelListingCard;


import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Label from "../../components/common/Lable";

const HotelListingCard = () => {
  const cardDetails = {
    hotel_name: "ABC Hotel",
    images: [
      "https://s3-alpha-sig.figma.com/img/6b13/02aa/bddd02cb069a6685667cae958a4f8c3d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bqhqKrUgaERCsi5X~kCM1ZxowQwEjIJ0jQHYnK~9BtA1RpfkJM1vjRhoXXBun62Eo6lkz5Wo5BDYgDt8rCoHwizC67bL2bKFKT4bUIE~pcRWiRgdmSITXlWg2Mv7aq1WlGLvEUVCoRd4lYlHeWmUheG~wHwn-6i45IDo4ndp3Wfzq9Hkn8Enp34lWofJXC0I0wdmW-O8jGfT92eiEw8S~tIKT9zQaRVyJC-OWmTZeTVJCBGy4OgPp2iz6vvsTROp3ZSjboMaI6lkm3C5lda63WrSzvQaR9cdo-dlEoA1sy1CvNS98BkrVqmY0zvCvaT-exYP9XhugFUd0WSB9RQG9w__", // Main Image
      "https://s3-alpha-sig.figma.com/img/1e9b/1756/2ad27c6f349b2b67412716c375ee7646?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=phCHB4zx5txgmQC9x3yRA71MlTl9~wudqJvdp3Sqc7YcDYh3uDNX3ruKIYCf1g3p-h15ASxD0FVZnKTiR9MKj5wftTcdMpA8soQTNWPj-tHEJBbd0tMQvfo3kvX-UfA-uuMtRY931pO25mqxK5KOPPgkMP7It~2cTTi7V-E6XATSc0e22FoHBts~jiRQBOkIakjlv-yaCV0P0tjzoI2NXqc53Movo62ccTyE6gzdFdpm8m2JHYaO3hrprO~ezHq9dPNQWFfE0pv3865VNPpeSSIBm475ULCc6avG5bW0fbHJPlNmPDzQo2NWyiS0YuFM8skRcLRgSzZgF~JV6oVmnA__", // Small Image 1
      "https://s3-alpha-sig.figma.com/img/d2a8/4c4c/5ddb4d3b7c7b20d8c6d06106833b3226?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N9N71LhE57nM6BYZ6w8uOhCT3leXyUcYu7W53VeX7Uk1SdsNnEmFeorWZQfQmVQuwA6mBsnjt1j6Dr2tyzO1SLG9LgTZDgRY34NLAxeCGSjGMX~7C60W1I-HfD-OkARd6rxh1GKYQRnCwOmXgptnWPPpCFs1sYsPv4gOJXDSMOg53FT2ucYCaWCUJquQr5hGf9q4jOHBs7kWZw0ENdS34TpUIZkBmy~A~ec~A8Lsu62x8X9OEqEjnW797q5IKEOKrg3P-7otPl1Pnwm~EbvVGwqD6Hh6b9UdJK0T4XsQrHY9EySAQxQHuOt0Bp6Snm2l2jUfQMCadqsSijN1MXP4oQ__", // Small Image 2
    ],
    star_rating: 4,
    rating: "4.2/5",
    address: "487, City Centre, Bedok, 541145.",
    room_types: ["Standard", "Deluxe"],
    amenities: ["Free Wi-Fi", "Swimming Pool", "Room Service", "Laundry & Ironing", "Gym"],
    price: 15000,
  };

  return (
    // <div>
    //   <div className="w-full max-w-4xl bg-white rounded-lg border border-gray-300 p-4 shadow-md flex gap-4">
    //     {/* Image Section */}
    //     <div className="w-1/3">
    //       <img
    //         src={cardDetails.images[0]}
    //         alt="Hotel Main"
    //         className="rounded-lg w-full h-[200px] object-cover shadow-md"
    //       />
    //       <div className="grid grid-cols-2 gap-2 mt-2">
    //         {cardDetails.images.slice(1).map((img, index) => (
    //           <img
    //             key={index}
    //             src={img}
    //             alt={`Hotel view ${index + 1}`}
    //             className="rounded-lg w-full h-[80px] object-cover shadow-sm"
    //           />
    //         ))}
    //       </div>
    //     </div>

    //     {/* Hotel Info Section */}
    //     <div className="w-2/3 flex flex-col justify-between">
    //       {/* Hotel Name & Ratings */}
    //       <div>
    //         <div className="flex items-center gap-2">
    //           <h2 className="text-xl font-bold">{cardDetails.hotel_name}</h2>
    //           <Label
    //             text={
    //               <>
    //                 {cardDetails.star_rating} <FaStar className="inline w-3 h-3 text-yellow-500 mx-1" /> Hotel
    //               </>
    //             }
    //             className="bg-yellow-100 text-black/45 border border-yellow-300 px-2 py-1 text-xs"
    //           />
    //           <Label text={cardDetails.rating} className="bg-green-100 text-green-700 border border-green-300 px-2 py-1 text-xs" />
    //         </div>

    //         <p className="flex items-center text-gray-600 text-sm mt-2">
    //           <FaMapMarkerAlt className="text-gray-500 mr-1" /> {cardDetails.address}
    //         </p>

    //         {/* Room Types */}
    //         <div className="flex gap-2 mt-2">
    //           {cardDetails.room_types.map((type, index) => (
    //             <Label
    //               key={index}
    //               text={type}
    //               className="bg-purple-100 text-purple-700 border border-purple-500 px-3 py-1 text-xs font-medium"
    //             />
    //           ))}
    //         </div>

    //         {/* Amenities */}
    //         <div className="flex flex-wrap gap-2 mt-2">
    //           {cardDetails.amenities.slice(0, 3).map((amenity, index) => (
    //             <Label
    //               key={index}
    //               text={amenity}
    //               className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 text-xs font-medium"
    //             />
    //           ))}
    //         </div>
    //         <div className="flex flex-wrap gap-2 mt-2">
    //           {cardDetails.amenities.slice(3).map((amenity, index) => (
    //             <Label
    //               key={index}
    //               text={amenity}
    //               className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 text-xs font-medium"
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       {/* Price & Booking Info */}
    //       <div className="text-right">
    //         <p className="text-gray-600 text-sm">4 Nights, 2 Adults, 1 Child</p>
    //         <p className="text-2xl font-bold text-purple-700">${cardDetails.price}</p>
    //         <p className="text-gray-500 text-sm">After taxes & fees</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full max-w-4xl bg-white rounded-lg border border-gray-300 p-4 shadow-md flex flex-col md:flex-row gap-4">
  {/* Image Section */}
  <div className="w-full md:w-1/3">
    <img
      src={cardDetails.images[0]}
      alt="Hotel Main"
      className="rounded-lg w-full h-[200px] object-cover shadow-md"
    />
    <div className="grid grid-cols-2 gap-2 mt-2">
      {cardDetails.images.slice(1).map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hotel view ${index + 1}`}
          className="rounded-lg w-full h-[80px] object-cover shadow-sm"
        />
      ))}
    </div>
  </div>

  {/* Hotel Info Section */}
  <div className="w-full md:w-2/3 flex flex-col justify-between">
    {/* Hotel Name & Ratings */}
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-lg md:text-xl font-bold">{cardDetails.hotel_name}</h2>
        <Label
          text={
            <>
              {cardDetails.star_rating} <FaStar className="inline w-3 h-3 text-yellow-500 mx-1" /> Hotel
            </>
          }
          className="bg-yellow-100 text-black/45 border border-yellow-300 px-2 py-1 text-xs"
        />
        <Label text={cardDetails.rating} className="bg-green-100 text-green-700 border border-green-300 px-2 py-1 text-xs" />
      </div>

      <p className="flex items-center text-gray-600 text-sm mt-2">
        <FaMapMarkerAlt className="text-gray-500 mr-1" /> {cardDetails.address}
      </p>

      {/* Room Types */}
      <div className="flex flex-wrap gap-2 mt-2">
        {cardDetails.room_types.map((type, index) => (
          <Label
            key={index}
            text={type}
            className="bg-purple-100 text-purple-700 border border-purple-500 px-3 py-1 text-xs font-medium"
          />
        ))}
      </div>

      {/* Amenities */}
      <div className="flex flex-wrap gap-2 mt-2">
        {cardDetails.amenities.slice(0, 3).map((amenity, index) => (
          <Label
            key={index}
            text={amenity}
            className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 text-xs font-medium"
          />
        ))}
      </div>
    </div>

    {/* Price & Booking Info */}
    <div className="text-right mt-4 md:mt-0">
      <p className="text-gray-600 text-sm">4 Nights, 2 Adults, 1 Child</p>
      <p className="text-2xl font-bold text-purple-700">${cardDetails.price}</p>
      <p className="text-gray-500 text-sm">After taxes & fees</p>
    </div>
  </div>
</div>
  );
};

export default HotelListingCard;
