import React from "react";
import DoctorCard2 from "./DoctorCard2";

const DoctorList2 = () => {
  return (
    <>
      <div className="hidden md:block">
        <div
          className="w-[1281px] rounded-[16px] p-[24px] bg-[#F6F7F8] opacity-100 mx-auto"
          dir="rtl"
        >
          <h2 className="w-[1223px] h-[36px] text-[24px] font-semibold text-[#222222] leading-[100%] text-right">
            اختر طبيبك المختص
          </h2>

          <div className="w-full pt-[16px] max-h-[580px] overflow-y-auto">
            <div className="grid grid-cols-3 gap-[4px] px-[15px]">
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
      </div>

      <div className="md:hidden p-4">
        <h2 className="text-2xl font-semibold text-[#222222] text-right mb-6">
          اختر طبيبك المختص
        </h2>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <DoctorCard2 />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <DoctorCard2 />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <DoctorCard2 />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <DoctorCard2 />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <DoctorCard2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList2;
