import React from "react";
import { useSelector } from "react-redux";
import arrowImage from "../../assets/weui_arrow-filled.png";
import mokIcon from "../../assets/mok.png";
import infoIcon from "../../assets/info-icon.png";

const MedicalTourismHeader = () => {
  const currentLang = useSelector((state) => state.language.current);
  const isArabic = currentLang === "ar";

  return (
    <div className="w-full flex justify-between items-center px-4 md:px-10 py-4 md:py-6 flex-wrap">
      {isArabic ? (
        <>
          {/* right back and title */}
          <div className="flex flex-col items-end gap-2 text-right">
            {/* الرجوع section */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={arrowImage}
                alt="Arrow Right"
                className="w-[12px] h-[24px] object-contain rotate-[270deg]"
              />
              <span
                className="text-[16px] md:text-[18px] font-medium text-[#6F6F6F]"
                style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              >
                الرجوع
              </span>
            </div>

            {/* الأطباء title */}
            <h1
              className="text-[20px] md:text-[24px] font-semibold text-[#222222]"
              style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
            >
              الأطباء
            </h1>
          </div>

          {/* left instruction + search */}
          <div className="flex items-center gap-2">
            <div className="w-[45px] h-[40px] bg-[#023554] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img
                src={mokIcon}
                alt="Search"
                className="w-[21px] h-[27px] object-contain"
              />
            </div>

            <div className="w-fit max-w-[217px] h-[40px] flex items-center gap-2 px-4 md:px-5 py-1.5 rounded-[8px] bg-[#023554] rtl">
              <span
                className="text-[#FEFEFE] text-[14px] md:text-[16px] font-medium"
                style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              >
                تعليمات وطرق الحجز
              </span>
              <img
                src={infoIcon}
                alt="info"
                className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* left back + title */}
          <div className="flex flex-col items-start gap-2 text-left">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={arrowImage}
                alt="Arrow Left"
                className="w-[12px] h-[24px] object-contain rotate-90"
              />
              <span
                className="text-[16px] md:text-[18px] font-medium text-[#6F6F6F]"
                style={{ fontFamily: "IBM Plex Sans Arabic" }}
              >
                Back
              </span>
            </div>
            <h1
              className="text-[20px] md:text-[24px] font-semibold text-[#222222]"
              style={{ fontFamily: "IBM Plex Sans Arabic" }}
            >
              Doctors & Centers
            </h1>
          </div>

          {/* right instruction + search */}
          <div className="flex items-center gap-2">
            <div className="w-fit max-w-[217px] h-[40px] flex items-center gap-2 px-4 md:px-5 py-1.5 rounded-[8px] bg-[#023554]">
              <img
                src={infoIcon}
                alt="info"
                className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
              />
              <span
                className="text-[#FEFEFE] text-[14px] md:text-[16px] font-medium"
                style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              >
                Booking Instructions
              </span>
            </div>

            <div className="w-[45px] h-[40px] bg-[#023554] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img
                src={mokIcon}
                alt="Search"
                className="w-[21px] h-[27px] object-contain"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MedicalTourismHeader;
