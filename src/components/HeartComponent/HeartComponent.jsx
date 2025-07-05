import React from "react";
import h1 from "../../assets/hearty.png";

const OpenHeartComponent = () => {
  return (
    <div className="flex flex-col w-[697px] h-[579px] rounded-[16px] p-[16px] gap-[24px] bg-[#F6F7F8]">
      <div className="flex flex-row w-[604px] h-[76px] mt-[16px] ml-[77px] gap-[19px]">
        <div className="w-[76px] h-[76px]">
          <img src={h1} alt="img" />
        </div>

        <p className="text-right font-bold text-[32px] leading-[100%] text-black/80">
          عملية القلب المفتوح
        </p>
      </div>
    </div>
  );
};

export default OpenHeartComponent;
