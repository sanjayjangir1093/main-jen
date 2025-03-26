import React, { useState } from "react";
import { DatePicker, Dropdown, Menu, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import HotelSearch from "./HotelSearch";
import AntdButton from "../../../components/common/AntdButton";
import { ErrorToast, SuccessToast } from "../../../utils/AppToast";
import { ApiURL } from "../../../services/apiConstants";





const HomeSearchLayout = () => {
  const { RangePicker } = DatePicker;
  const { TabPane } = Tabs;
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [loader, set_loader] = useState(false);



 



  // Guest Dropdown Menu
 
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        {/* Tabs using Ant Design */}
        <Tabs defaultActiveKey="1" centered>
          {/* Hotel Tab */}
          <TabPane tab={<span>🏨 Hotel</span>} key="1">
         <HotelSearch/>
          </TabPane>

          {/* Transfers Tab */}
          <TabPane tab={<span>🚗 Transfers</span>} key="2">
            <div className="mt-4 text-center text-gray-500">🚗 Transfers Form Coming Soon...</div>
          </TabPane>

          {/* Experience Tab */}
          <TabPane tab={<span>🎟 Experience</span>} key="3">
            <div className="mt-4 text-center text-gray-500">🎟 Experience Form Coming Soon...</div>
          </TabPane>
        </Tabs>

        {/* Search Button */}
              
      <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
            <AntdButton text="Search" loading={loader} />
           {/* <AntdButton text="Search" /> */}
          </div>
       
      </div>
    </div>
  );
};

export default HomeSearchLayout;