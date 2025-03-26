import React from 'react'
import HotelSearch from '../../Home/HomeSearch/HotelSearch';
import AntdButton from '../../../components/common/AntdButton';
import HotelSearchForHeader from './HotelSearchForHeader';

const HotelSearchResultHeader = () => {
  return (
    <>
      <HotelSearchForHeader />
      {/* <HotelSearch /> */}
      <AntdButton text="Update"
       className="w-[114px] h-[40px] border border-gray-300 px-[15px] py-[6.4px] gap-[10px] rounded-[4px]" 
      />
    </>
  );
};

export default HotelSearchResultHeader
