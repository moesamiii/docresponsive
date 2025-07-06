import React from "react";
import doctorImg from "../../assets/doctor.png";
import riyalIcon from "../../assets/riyalsaudi.png";
import experienceIcon from "../../assets/experience.png";
import locationIcon from "../../assets/location.png";

const DoctorCard2 = () => {
  return (
    <div
      className="w-[365px] min-h-[128px] bg-[#FEFEFE] rounded-[16px] border border-[#E0E0E0] p-4 flex flex-col gap-[10px] shadow-sm"
      dir="rtl"
    >
      <div className="relative flex w-full items-start">
        <div className="absolute right-0 top-0">
          <img
            src={doctorImg}
            alt="doctor"
            className="w-[64px] h-[64px] rounded-[16px]  object-cover"
          />
        </div>

        <div className="w-full flex flex-col items-center text-center gap-[4px] pr-[72px]">
          <h2 className="text-[20px] font-semibold text-[#222222] leading-[32px]">
            د/ محمد أحمد الخالدي
          </h2>

          <p className="text-[14px] text-[#4F4F4F] leading-[21px]">
            استشاري جراحة القلب والصدر سعودي
          </p>

          <p className="text-[14px] text-[#4F4F4F] leading-[21px] flex items-center justify-center gap-[4px] text-right">
            <img src={experienceIcon} alt="exp" className="w-[20px] h-[20px]" />
            خبرة 15 عام
          </p>

          <p className="text-[14px] text-[#00598F] leading-[21px] flex items-center justify-center gap-[4px] font-medium">
            <img
              src={locationIcon}
              alt="location"
              className="w-[20px] h-[20px]"
            />
            مستشفى الأردن التخصصي
          </p>
        </div>
      </div>

      <p className="text-[14px] text-[#333] leading-[22px]">
        د.محمد أحمد الخالدي هو استشاري في طب جراحة القلب والصدر يتمتع بخبرة تزيد
        عن 20 سنة في إجراء عمليات القلب المفتوح وجراحات الشرايين التاجية، ويعد
        من الرواد في استخدام التقنيات الحديثة في جراحة القلب بالمنظار.
      </p>

      <div className="flex items-center gap-[8px] text-[#0798F1] text-[20px] font-bold leading-[30px]">
        15000
        <img src={riyalIcon} alt="SAR" className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default DoctorCard2;
