import React from "react";
import { Layout } from "antd";
import HotelSearchResultHeader from "../../Hotel/HotelSearchResult/HotelSearchForHeader"
import HotelSearchResultFilter from "../../Hotel/HotelSearchResult/HotelSearchResultFilter"
import HotelListingCard from "../HotelListingCard";
import AntdButton from "../../../components/common/AntdButton";
import { ApiURL } from "../../../services/apiConstants";
import { ErrorToast, SuccessToast } from "../../../utils/AppToast";
import { useParams } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const HotelSearchResult = () => {
  const { location, check_in_date, check_out_date} = useParams();



  // useEffect(() => {
  //   if (timer > 0) {
  //     const interval = setInterval(() => {
  //       setTimer((prevTime) => prevTime - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   } else {
  //     setCanResend(true);
  //   }
  // }, [timer]);



  const handleSearch = async () => {
    set_loader(true); 
      try {
        const FORM_DATA = new FormData();
        // FORM_DATA.append("company_type", company_type ?? "");
        FORM_DATA.append("location", atob(location));
        // FORM_DATA.append("city", city ?? "");
        // FORM_DATA.append("company_name", company_name ?? "");
        FORM_DATA.append("check_in_date", atob(check_in_date));
        FORM_DATA.append("check_out_date", atob(check_out_date));
        post(ApiURL.search_hotel, FORM_DATA).then((res) => {
          if (res?.status) {
            SuccessToast("Success message!!", res?.message);
            set_loader(false);
          } else {
            ErrorToast("Search Error:", "An error occurred during Search!");
            set_errors(res?.errors);
            set_loader(false) 
          }
        });
      } catch (errors) {
        ErrorToast("Search error:", "An error occurred during Search!");
        set_loader(false)
      } 
    };


  return (
    <Layout>
      {/* Header */}
      <Header className="flex justify-between items-center mt-2" style={{background:"none",  backgroundColor:"#B491D1", height:"70px"}}>
      <div className="ml-16">  {/* Added margin-left */}
        <HotelSearchResultHeader /> 
      </div>
        <AntdButton
          text="Update"
          className="w-[114px] h-[40px] border border-gray-300 px-[15px] py-[6.4px] rounded-[4px] bg-purple-500 text-white hover:bg-purple-600 mr-12"
        />

      </Header>
      <Layout style={{margin:"40px 100px 0 100px"}}>
        <Sider 
        style={{padding:0,background:"white"}}
          width={280} 
          className="bg-white shadow-md p-4 hidden md:block"
        >
          <HotelSearchResultFilter />
        </Sider>

        {/* Main Content */}
        <Content style={{marginLeft:"30px"}}>
          <HotelListingCard />
          <HotelListingCard />
          <HotelListingCard />
        
        </Content>
      </Layout>
    </Layout>
  );
};

export default HotelSearchResult;




// import React from "react";
// import { Layout } from "antd";
// import { useSelector } from "react-redux";
// import HotelSearchResultHeader from "../../Hotel/HotelSearchResult/HotelSearchForHeader";
// import HotelSearchResultFilter from "../../Hotel/HotelSearchResult/HotelSearchResultFilter";
// import HotelListingCard from "../HotelListingCard";
// import AntdButton from "../../../components/common/AntdButton";
// import { useParams } from "react-router-dom";

// const { Header, Sider, Content } = Layout;

// const HotelSearchResult = () => {
//   const searchData = useSelector((state) => state.hotelSearchResult);
//   const { destination, checkInDate, checkOutDate } = useParams();
//   const decodedDestination = decodeURIComponent(destination);
// const decodedCheckInDate = decodeURIComponent(checkInDate);
// const decodedCheckOutDate = decodeURIComponent(checkOutDate);

// console.log("Decoded Destination:", decodedDestination);
// console.log("Decoded Check-in Date:", decodedCheckInDate);
// console.log("Decoded Check-out Date:", decodedCheckOutDate);


//   return (
//     <Layout>
//       <Header className="flex justify-between items-center mt-2" style={{ background: "none", backgroundColor: "#B491D1", height: "70px" }}>
//         <div className="ml-16">
//           <HotelSearchResultHeader />
//         </div>
//         <AntdButton text="Update" className="w-[114px] h-[40px] border border-gray-300 px-[15px] py-[6.4px] rounded-[4px] bg-purple-500 text-white hover:bg-purple-600 mr-12" />
//       </Header>

//       <div className="p-4">
//         <h2 className="text-xl font-semibold">Search Results for {searchData.destination}</h2>
//         <p>Check-in: {searchData.checkInDate}</p>
//         <p>Check-out: {searchData.checkOutDate}</p>
//         <p>Guests: {searchData.guests.adults} Adults, {searchData.guests.children} Children, {searchData.guests.rooms} Rooms</p>
//       </div>

//       <Layout style={{ margin: "40px 100px 0 100px" }}>
//         <Sider style={{ padding: 0, background: "white" }} width={280} className="bg-white shadow-md p-4 hidden md:block">
//           <HotelSearchResultFilter />
//         </Sider>

//         <Content style={{ marginLeft: "30px" }}>
//           <HotelListingCard />
//           <HotelListingCard />
//           <HotelListingCard />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default HotelSearchResult;
