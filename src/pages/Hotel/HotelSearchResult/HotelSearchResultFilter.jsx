import React from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const HotelSearchResultFilter = () => {
  return (
    <div className="w-[280px] bg-white rounded-[4px] p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h3 className="font-bold text-lg">FILTERS</h3>
        <button className="text-purple-700 font-medium text-sm">CLEAR</button>
      </div>

      {/* Filters */}
      <Collapse 
        defaultActiveKey={["1"]} 
        ghost 
        expandIconPosition="right"
        className="[&>.ant-collapse-item>.ant-collapse-header]:font-medium"
      >
        {/* Star Rating */}
        <Panel header="Star Rating" key="1">
          <div className="flex flex-col gap-2">
            <Checkbox>5 Star</Checkbox>
            <Checkbox>4 Star</Checkbox>
            <Checkbox>3 Star</Checkbox>
          </div>
        </Panel>

        {/* Room Type */}
        <Panel header="Room Type" key="2">
          <p>Room type filter options</p>
        </Panel>

        {/* Amenities */}
        <Panel header="Amenities" key="3">
          <p>Amenities filter options</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default HotelSearchResultFilter;
