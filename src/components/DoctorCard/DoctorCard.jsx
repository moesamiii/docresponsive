import React from "react";
import docsImage from "../../assets/docsimage.png";

const DoctorCard = ({
  name,
  specialization,
  rating,
  image,
  language = "ar",
}) => {
  const isArabic = language === "ar";
  const shortName = name?.split(" ").slice(0, 2).join(" ");

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = docsImage;
  };

  return (
    <div className="w-full max-w-[240px] flex flex-col gap-2">
      {/* img container */}
      <div className="w-full h-[186.25px] bg-[#023554] rounded-[9.38px] relative overflow-hidden">
        <img
          src={image || docsImage}
          alt={name}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-[#0798F1] text-white text-xs font-semibold rounded px-2 py-0.5 flex items-center gap-1">
          ⭐ {rating}
        </div>
      </div>

      <div
        className={`flex flex-col w-full px-1 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <span
          className="text-[#222222] font-medium text-[16px] sm:text-[18px]"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {shortName}
        </span>
        <span
          className="text-[#686767] text-[14px] sm:text-[16px] leading-[160%]"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {specialization}
        </span>
      </div>

      <button
        className="w-full h-[40px] border border-[#0798F1] rounded-[8px] text-[#0798F1] font-medium text-[16px] sm:text-[18px] flex items-center justify-center"
        style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {isArabic ? "عرض المزيد" : "View More"}
      </button>
    </div>
  );
};

export default DoctorCard;
