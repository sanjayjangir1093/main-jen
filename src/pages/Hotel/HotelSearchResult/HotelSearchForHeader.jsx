
import React, { useCallback, useState } from "react";
import { Input, DatePicker, Dropdown, Menu, Tabs, Space, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import AntdButton from "../../../components/common/AntdButton";
import { ApiURL } from "../../../services/apiConstants";
import { ErrorToast, SuccessToast } from "../../../utils/AppToast";
import Antdsearch from "../../../components/common/Antdsearch";
// const [errors, set_errors] = useState([]);
// import AntdLoader from "../"
// import AntdButton from "../common/AntdButton";
import { debounce } from "lodash";
import { post } from "../../../services/services";
import AntdInput from "../../../components/common/AntdInput";


const HotelSearchForHeader = () => {
  const [options, setOptions] = useState([]);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState('');
  const [CheckInDate, setCheckInDate] = useState('');
  const [CheckOutDate, setCheckOutDate] = useState('');
    // const [dates, setDates] = useState([dayjs(), dayjs().add(1, "week")]);
  console.log('dates', dates);


  const [loader, set_loader] = useState(false);
  const { RangePicker } = DatePicker;
  const [HotelSearchField, set_HotelSearchField] = useState("");
    const handleDateChange = (dates) => {
      if (dates) {
        setDates(dates);
        CheckInDate(dates[0].format("YYYY-MM-DD")); 
        setCheckOutDate(dates[1].format("YYYY-MM-DD")); 
      } else {
        setDates('');
        setCheckInDate('');
        setCheckOutDate('');
      }
    };
    
  
    const handleChange = (key, val) => {
      setGuests((prev) => ({ ...prev, [key]: val }));
    };
  // Function to fetch data from API
  const HotelSearchResult = async (query) => {
    if (!query) {
      setOptions([]);
      return;
    }

    try {
      const FORM_DATA = new FormData();
      FORM_DATA.append("search_type", "hotel");
      FORM_DATA.append("search_string", query  ?? "" );
      post(ApiURL.home_search_query, FORM_DATA).then((res) => {
              if (res?.status) {
                console.log("res", res);
                set_loader(false);
                const formattedOptions = res?.data?.map((item) => ({
                  value: item.name,
                  label: (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>{item.name}</span>
                      <span style={{ color: "#999" }}>{item.type}</span>
                    </div>
                  ),
                }));
          
                setOptions(formattedOptions);
              } else {
                ErrorToast("Search error:", "An error occurred during search!");
                set_errors(res?.errors);
                set_loader(false)
              }
            });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  const debouncedSearch = useCallback(debounce(HotelSearchResult, 300), []);

  const handleHotelSearch = (value) => {
    set_HotelSearchField(value); 
    debouncedSearch(value); 
  };
  const handleSelect = (value) => {
  console.log("value",value)
  set_HotelSearchField(value); // Store the selected hotel name
};

  return (
      // <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Antdsearch placeholder="City/Hotel Name/Location"
                 options={options}
                 value={HotelSearchField}
                 onSearch={handleHotelSearch}
                 onSelect={handleSelect}
                />
              </div>

              {/* Date Picker */}
              <div>
                <RangePicker
                  className="w-full"
                  style={{ height: "40px" }}
                  format="YYYY-MM-DD"
                  value={dates}
                  // onChange={(dates) => setDates(dates)}
                  onChange={handleDateChange}
                  // defaultValue={[dayjs(), dayjs().add(1, "week")]}
                />
              </div>

            
              <div>
              {/* <label className="block text-gray-600 text-sm mb-1">Guests & Rooms</label> */}
              <Select
                placeholder="Guest & Rooms"
                style={{ width: "100%", height:"40px" }}
                value={`${guests.adults} Adults | ${guests.children} Children | ${guests.rooms} Rooms`} 
      dropdownRender={() => (
        <Space direction="vertical" style={{ padding: 10, width: "100%" }} >

          {/* Adults */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label className="text-gray-600 text-sm w-20">Adults</label>
            <Input
              type="number"
              placeholder="Adults"
              value={guests.adults}
              onChange={(e) => handleChange("adults", e.target.value)}
              style={{ flex: 1 }}
            />
          </div>

          {/* Children */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label className="text-gray-600 text-sm w-20">Children</label>
            <Input
              type="number"
              placeholder="Children"
              value={guests.children}
              onChange={(e) => handleChange("children", e.target.value)}
              style={{ flex: 1 }}
            />
          </div>

          {/* Rooms */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label className="text-gray-600 text-sm w-20">Rooms</label>
            <Input
              type="number"
              placeholder="Rooms"
              value={guests.rooms}
              onChange={(e) => handleChange("rooms", e.target.value)}
              style={{ flex: 1 }}
            />
          </div>
        </Space>
      )}
    />
    </div>
        

       </div>
  );
};

export default HotelSearchForHeader;



