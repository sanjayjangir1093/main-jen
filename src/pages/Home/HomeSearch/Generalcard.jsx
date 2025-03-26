
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Label from "../../../components/common/Lable";
import { post } from "../../../services/services";
import { ApiURL } from "../../../services/apiConstants";
import { ErrorToast, SuccessToast } from "../../../utils/AppToast";


// Example dynamic images array (Replace with API data)
const images = [
  "https://s3-alpha-sig.figma.com/img/4811/733a/2a6560b0134e4ae52a16fbe5ecf69fb4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OPqHrfhVhHKmhc3Z8iho4T~kvQdDKvIgDeKn-OudCcCAkQ-L8sgwIHXrreJMt6hOepdLVhhej5boeMx3MtmKDMAOZSrSQ36KW74MRawXDXTUt5yuCT64XuYBE9edwugxmtXh8mvCLx-SltJd~TnkrrxnOcs12WLG77mFlnhlEYAMqwblrKNK8DN-LeH14PDPKWfU5Adb4PZ-DU8qbc7kc7xpE-9wvlqCQk6upyDHZNLGoo96nHcqnblVZvZlphaQcBqu1ck-hCRF-kU2G67hevY10JwjhlV0WRtFuugVKv1gw5E4Ue~~qficDj7OaK8ReoU42BKDAyUAm6KVbEvR3A__", // Main image
  "https://s3-alpha-sig.figma.com/img/9289/1154/752c8fc38e1a76820dcb54e003eaad3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YffmgarKwSBp5hL7-yw0vrMTx1iRh1FZkjixFaidMGixlmLK5PCTOPPLofs3JmzkZ-WW-lbQ5ZQTRRIM2Cku4n6Z56O95fwlOqip-0b3qOhT8XRyaQAUEkrk27XBzQS2z~0ocd898ns5gZ7RuoFLP~b2WAiqvIXZ~x1-NYUsPOWW7O7q1kfoifhhBz5vPImE~IVnDBMRTfu13vWSajTKGXpdLL2NmujDzuG~RXNo04UYGMSOnYhh6qo9FURDtZ97B8uCsXUk3wjB8ar7KJG28r7hW8B8TXqF5EQG0LZvYAfFVFHsPHtMemcR-X-iiqM~fPSqLKvFUgta4qecKiMa2Q__", // Small images
  "https://s3-alpha-sig.figma.com/img/461f/8448/48284bc653056496f5251905185b70b8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gIHqzjJk-qEMlLKt-Ql2uQZSr8Iotfy~ExXq7h5mAe~XyVNeNEGUjZ1zKxVVCVMpLSuB9Hf5b6XDzeKX3B35ogCrytvftdgVfd-5H00uaUIJnFbI9inxER0ptx3uPGhCRJih2qSDf6IzRaNvXzDvmd-JSEanfP8FnKQspzrzMDJWgxf8PDnK~0NBePxL~OWgTSEihRuzh81q9gsnbmEJMts7Ws2G6KlvLIEZd4exPL-tWBRL9HrueTSP2veCRis~00g-QdWWtSynSwJPGkE4LiExYPzxZRsCEIvkQqfj1Asfx0BDQR6fQp4LHZxbEG2tJEnxka3pUTJhTtVQ2sruSg__",
];

const GeneralCard = () => {
const [image, set_image] = useState([]);
const [loader, set_loader] = useState(false);
const [errors, set_errors] = useState([]);
const [cardDetails, set_carddetails] = useState("");


const SingleCardView = async () => {
  set_loader(true) 
  try {
    const FORM_DATA = new FormData();
    // FORM_DATA.append("id", id);
    FORM_DATA.append("id", 58);
     post(ApiURL.single_card_view, FORM_DATA).then((res) => {
      console.log("API Response:", res);
            if (res?.status) {
              set_carddetails(res?.data);
              console.log(res?.data);
              set_loader(false);
            
    // if (res?.status) {
    //   console.log("Images Array:", res?.data?.image); 
    //   const data = res?.data;
    //   // Ensure room_types is parsed into an array
    //   const parsedData = {
    //     ...data,
    //     room_types: typeof data.room_types === "string" ? JSON.parse(data.room_types) : data.room_types
    //   };
    //   set_carddetails(parsedData);
      set_loader(false);
            } else {
              ErrorToast("Card error:", "An error occurred during card loading!");
              set_errors(res?.errors);
              set_loader(false)
            }
          });
        } catch (errors) {
          ErrorToast("Card error:", "An error occurred during card loading!");
          set_loader(false)
        }  
};

useEffect(() => {
  SingleCardView();
}, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px] h-auto min-w-[250px] max-w-[400px] rounded-lg border border-gray-300 p-2 shadow-md">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Dynamic Large Image (First Image in Array) */}
        {cardDetails?.image?.length > 0 && (
          <div className="col-span-2">
            <img
               src={cardDetails?.image[0]}
              alt="Hotel Main"
              className="rounded-lg w-full h-[250px] object-cover shadow-md"
            />
          </div>
        )}

        {/* Dynamic Small Images (Remaining Images in Array) */}
        {cardDetails?.image?.slice(1)?.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Hotel view ${index + 1}`}
              className="rounded-lg w-full h-[120px] object-cover shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* Hotel Info */}
      <div className="mt-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">{cardDetails?.hotel_name}</h2>
          {/* <Label 
            text={ <span className="bg-[#FFFBE6] text-black/45  px-2 py-1 rounded flex items-center">{cardDetails?.star_rating}<FaStar className="inline w-3 h-3 text-yellow-500 mx-0.5" style={{ marginTop: "-2.5px" }} />Hotel</span>} 
            
            // className="bg-yellow-100 text-yellow-700 border border-yellow-500 px-2 py-1 text-xs"
            className="bg-yellow-100 text-yellow-700 border-[1px] border-[#FFE58F] px-2 py-1 text-xs"

          /> */}
          <Label 
          text={
            <>
              {cardDetails?.star_rating}
              <FaStar className="inline w-3 h-3 text-yellow-500 mx-0.5" style={{ marginTop: "-2.5px" }} />
              Hotel
            </>
          }
          className="bg-[#FFFBE6] text-black/45 border-[1px] border-[#FFE58F] px-2 py-1 text-xs"
        />

          <Label text={cardDetails?.user_rating} className="bg-[#FFFBE6] text-[#000000] border border-[#B7EB8F] px-2 py-1 text-xs" />
        </div>
        <p className="flex items-center text-gray-600 text-sm mt-2">
          <FaMapMarkerAlt className="text-gray-500 mr-1" /> {cardDetails?.address}
        </p>
      </div>

      {/* Room Types */}
      <div className="flex gap-2 mt-4">
        {/* <div className="flex gap-2 mt-4"> */}
        {cardDetails?.room_types?.map((type, index) => (
          <Label 
            key={index} 
            text={type} 
            className="bg-purple-100 text-purple-700 border border-purple-500 px-3 py-1 text-xs font-medium" 
          />
        ))}
      </div>
      </div>
    </div>
    // </div>
  );
};

export default GeneralCard;
