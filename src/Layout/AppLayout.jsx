// import React, { useState } from "react";
// import { Layout, Menu } from "antd";
// import { HomeOutlined, InfoCircleOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/common/Navbar";

// const { Header, Content, Sider } = Layout;

// const AppLayout = () => {
//   const [selectedKey, setSelectedKey] = useState("home");

//   return (
//     <Layout>
//       {/* Navbar */}
//       <Header className="bg-purple-600 shadow-md flex justify-between items-center px-6">
//         <Navbar />  
//       </Header>
//       <Content
//                 style={{
//                   margin: '24px 16px',
//                   padding: 24,
//                   minHeight: window.innerHeight,
//                   background: "#666",
//                   // borderRadius: borderRadiusLG,
//                 }}
//               >
//                 <Outlet />
//               </Content>
    
//     </Layout>
//   );
// };

// export default AppLayout;

// import React from "react";
// import { Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/common/Navbar";

// const { Header, Content } = Layout;

// const AppLayout = () => {
//   return (
//     <Layout className="min-h-screen w-full">
//       {/* Navbar Section */}
//       <Header style={{background:"#fff",height:"100px"}}>
//         <Navbar />
//       </Header>

//       {/* Content Section */}
//       <Content
//         className="mt-[64px] w-full flex justify-center" // Flex to center content
//         style={{
//           padding: "0",
//           minHeight: "calc(100vh - 64px)",
//           background: "#f9f9f9",
//           width: "100vw", // Force full viewport width
//           maxWidth: "100%", // Prevent any max-width restriction
//         }}
//       >
//         <div className="w-full max-w-[1400px]"> {/* Container to restrict max width if needed */}
//           <Outlet />
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default AppLayout;


import React from "react";
import Navbar from "../components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </header>
      
      {/* Page Content */}
      <main className="mt-16 flex-1">{/* Adjust margin-top based on navbar height */}
        {children}
      </main>
    </div>
  );
};

export default Layout;

