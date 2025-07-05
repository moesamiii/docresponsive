import React from "react";
import { useSelector } from "react-redux";
import arrowImage from "../../assets/weui_arrow-filled.png";
// import mokIcon from "../../assets/mok.png";
// import infoIcon from "../../assets/info-icon.png";

const MedicalTourismHeader = () => {
  const currentLang = useSelector((state) => state.language.current);
  const isArabic = currentLang === "ar";

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-10 py-4 md:py-6">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/*  back + title section  always on left in english and right in Arabic */}
          <div
            className={`flex items-center gap-2 order-1 ${
              isArabic ? "order-2 text-right" : "order-1 text-left"
            }`}
          >
            <img
              src={arrowImage}
              alt={isArabic ? "Arrow Right" : "Arrow Left"}
              className={`w-[12px] h-[24px] object-contain -mt-6 ${
                isArabic ? "rotate-[270deg]" : "rotate-90"
              }`}
            />

            <div className="flex flex-col">
              <span
                className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6F6F6F]"
                style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              >
                {isArabic ? "الرجوع" : "Back"}
              </span>
              <h1
                className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#222222]"
                style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              >
                {isArabic ? "تفاصيل العملية " : "Doctors & Centers"}
              </h1>
            </div>
          </div>

          <div
            className={`flex items-center gap-2  order-2 ${
              isArabic ? "order-1" : "order-2"
            }`}
          >
            {/*  
            <div className="w-[45px] h-[40px] bg-[#023554] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img
                src={mokIcon}
                alt="Search"
                className="w-[21px] h-[27px] object-contain"
              />
            </div>. */}

            {/* instruction Box */}

            {/*.   <div className="flex items-center gap-2 px-4 md:px-5 py-1.5 rounded-[8px] bg-[#023554]">
              {isArabic ? (
                <>
                  <span
                    className="text-[#FEFEFE] text-[12px] sm:text-[14px] md:text-[16px] font-medium whitespace-nowrap"
                    style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                  >
                    تعليمات وطرق الحجز
                  </span>
                  <img
                    src={infoIcon}
                    alt="info"
                    className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
                  />
                </>
              ) : (
                <>
                  <img
                    src={infoIcon}
                    alt="info"
                    className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
                  />
                  <span
                    className="text-[#FEFEFE] text-[12px] sm:text-[14px] md:text-[16px] font-medium whitespace-nowrap"
                    style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                  >
                    Booking Instructions
                  </span>
                </>
              )}
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTourismHeader;
