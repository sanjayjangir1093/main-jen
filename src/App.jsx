// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./components/auth/Login";
// import Registration from "./components/auth/Registration";
// import ForgotPassword from "./components/auth/ForgotPassword";
// import InputOTPPage from "./components/auth/InputOtpPage";
// import SetPassword from "./components/auth/SetPassword";
// import SetNewPassword from "./components/auth/SetNewPassword";
// import HotelSearch from "./pages/Home/HomeSearch/HotelSearch";
// import GeneralCard from "./pages/Home/HomeSearch/Generalcard";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/sign-up" element={<Registration />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/otp/:email" element={<InputOTPPage />} />
//           <Route path="/set-password/:email" element={<SetPassword />} />
//           <Route path="/user/set-new-password/:token/:role" element={<SetNewPassword/>} />
//           <Route path="hotel-search" element={<HotelSearch/>} />
//           <Route path="general-card"element={<GeneralCard/>} />
          
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./components/auth/Login";
// import Registration from "./components/auth/Registration";
// import ForgotPassword from "./components/auth/ForgotPassword";
// import InputOTPPage from "./components/auth/InputOtpPage";
// import SetPassword from "./components/auth/SetPassword";
// import SetNewPassword from "./components/auth/SetNewPassword";
// import HotelSearch from "./pages/Home/HomeSearch/HotelSearch";
// // import GeneralCard from "./pages/Home/HomeSearch/Generalcard";
// import GeneralCard from "./pages/Home/HomeSearch/Generalcard";
// import HomeSearchLayout from "./pages/Home/HomeSearch";
// import { ConfigProvider, Layout } from "antd";
// import HomePage from "./pages/Home/HomePage";
// import Navbar from "./components/common/Navbar";
// import HotelListings from "./pages/Hotel/HotelListings";
// import HotelListingCard from "./pages/Hotel/HotelListingCard";
// import AppLayout from "./Layout/AppLayout";
// import HotelSearchResultHeader from "./pages/Hotel/HotelSearchResult/HotelSearchResultHeader";
// import HotelSearchForHeader from "./pages/Hotel/HotelSearchResult/HotelSearchForHeader";
// import HotelSearchResultFilter from "./pages/Hotel/HotelSearchResult/HotelSearchResultFilter";
// import HotelSearchResult from "./pages/Hotel/HotelSearchResult";

// function App() {
//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: "#4d008c",  // Customize primary color
//         },
//       }}
//     >
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/sign-up" element={<Registration />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/otp/:email" element={<InputOTPPage />} />
//           <Route path="/set-password/:email" element={<SetPassword />} />
//           <Route path="/user/set-new-password/:token/:role" element={<SetNewPassword />} />
//           <Route path="/hotel-search" element={<HotelSearch />} />
//           {/* <Route path="/general-card" element={<SampleHotelPage />} /> */}
//           <Route path="/general-card" element={<GeneralCard />} />
//           <Route path="/HomeSearchLayout" element={<HomeSearchLayout />} />
//           <Route path="/home-page" element={<HomePage/>} />
//           <Route path="/navbar" element={<Navbar/>} />
//           <Route path="/hotel-listing" element={<HotelListings/>} />
//           <Route path="/hotel-listing-card" element={<HotelListingCard/>} />
//           <Route path="/app-layout" element={<AppLayout/>} />


//           <Route path="/hotel-search-result-header" element={<HotelSearchResultHeader/>} />
//           <Route path="/hotel-search-for-header" element={<HotelSearchForHeader/>} />
//           <Route path="/hotel-search-result-filter" element={<HotelSearchResultFilter/>} />
//           <Route path="/hotel-search-result-layout" element={<HotelSearchResult/>} />

//         </Routes>
//       </BrowserRouter>
//     </ConfigProvider>
//   );
// }

// export default App;



import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import ForgotPassword from "./components/auth/ForgotPassword";
import InputOTPPage from "./components/auth/InputOtpPage";
import SetPassword from "./components/auth/SetPassword";
import SetNewPassword from "./components/auth/SetNewPassword";
import HotelSearch from "./pages/Home/HomeSearch/HotelSearch";
// import GeneralCard from "./pages/Home/HomeSearch/Generalcard";
import GeneralCard from "./pages/Home/HomeSearch/Generalcard";
import HomeSearchLayout from "./pages/Home/HomeSearch";
import { ConfigProvider, Layout } from "antd";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/common/Navbar";
import HotelListings from "./pages/Hotel/HotelListings";
import HotelListingCard from "./pages/Hotel/HotelListingCard";
import AppLayout from "./Layout/AppLayout";
import HotelSearchResultHeader from "./pages/Hotel/HotelSearchResult/HotelSearchResultHeader";
import HotelSearchForHeader from "./pages/Hotel/HotelSearchResult/HotelSearchForHeader";
import HotelSearchResultFilter from "./pages/Hotel/HotelSearchResult/HotelSearchResultFilter";
import HotelSearchResult from "./pages/Hotel/HotelSearchResult";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4d008c",  // Customize primary color
        },
      }}
    >
      <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp/:email" element={<InputOTPPage />} />
          <Route path="/set-password/:email" element={<SetPassword />} />
          <Route path="/user/set-new-password/:token/:role" element={<SetNewPassword />} />
          <Route path="/hotel-search" element={<HotelSearch />} />
          {/* <Route path="/general-card" element={<SampleHotelPage />} /> */}
          <Route path="/general-card" element={<GeneralCard />} />
          <Route path="/HomeSearchLayout" element={<HomeSearchLayout />} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/hotel-listing" element={<HotelListings/>}/>
          <Route path="/hotel-listing-card" element={<HotelListingCard/>} />
          <Route path="/app-layout" element={<AppLayout/>} />


          <Route path="/hotel-search-result-header" element={<HotelSearchResultHeader/>}/>
          <Route path="/hotel-search-for-header" element={<HotelSearchForHeader/>} />
          <Route path="/hotel-search-result-filter" element={<HotelSearchResultFilter/>} />
          <Route path="/hotel-search-result-layout" element={<HotelSearchResult/>} />
        </Routes>
        </AppLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
