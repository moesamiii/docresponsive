import React from "react";
import DoctorCard2 from "./DoctorCard2";

const DoctorList2 = () => {
  return (
    <div
      className="w-[1281px] rounded-[16px] p-[50px] bg-[#F6F7F8] opacity-100 mx-auto"
      dir="rtl"
    >
      <h2 className="w-[1223px] h-[36px] text-[24px] font-semibold text-[#222222] leading-[100%] text-right">
        اختر طبيبك المختص
      </h2>

      {/* Add scroll here */}
      <div className="w-full pt-[16px] max-h-[580px] overflow-y-auto">
        <div className="grid grid-cols-3 gap-[4px]">
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
          <DoctorCard2 />
        </div>
      </div>
    </div>
  );
};

export default DoctorList2;
