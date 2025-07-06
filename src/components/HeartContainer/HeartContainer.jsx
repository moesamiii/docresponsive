import React from "react";
import h1 from "../../assets/hearty.png";
import i1 from "../../assets/i1.png";
import hand from "../../assets/hand.png";
import star from "../../assets/star.png";
import icu from "../../assets/icu.png";

const HeartContainer = () => {
  return (
    <div className="w-full flex justify-center pt-[40px] mb-[25px]">
      <div className="w-[1281px]  opacity-100 gap-[24px] top-[278px] left-[79px] rotate-0">
        <div className="flex flex-row w-[1281px] h-[579px] rounded-[16px] opacity-100 gap-[32px] rotate-0">
          <div className="flex flex-col w-[697px] h-[579px] rounded-[16px] opacity-100 gap-[24px] p-[16px] bg-[#F6F7F8] rotate-0">
            <div className=" flex w-[604px] h-[76px] opacity-100 rotate-0  top-[16px] left-[77px] gap-[19.07px]">
              <div className="w-[76px] h-[76px] opacity-100 rotate-0">
                <img src={h1} alt="h1" />
              </div>

              <p className="w-[378px] h-[48px] pt-[20px] text-[32px] leading-[100%] font-bold text-black/80 text-right">
                عملية القلب المفتوح
              </p>
            </div>

            <div className="flex flex-col w-[501px] h-[117px] opacity-100 rotate-0 gap-[16px]">
              <div className="flex items-center gap-[4px] w-[135.58px] h-[20px] opacity-100 rotate-0">
                <img
                  src={i1}
                  alt="icon"
                  className="w-[16px] h-[16px] opacity-100 rotate-0"
                />

                <p className="w-[116.92px] h-[20px] text-[20px] leading-[24px] font-medium text-right align-middle">
                  عن العملية
                </p>
              </div>
              <p className="w-[501px] h-[81px] text-[20px] leading-[27px] font-normal text-right align-middle">
                عملية القلب المفتوح هي إجراء جراحي كبير يتم فيه فتح الصدر للوصول
                إلى القلب لعلاج مشاكل الشرايين التاجية أو صمامات القلب. تستغرق
                العملية من 3 إلى 6 ساعات تحت التخدير العام الكامل.
              </p>
            </div>

            <div className="w-[422px] h-[156px] pt-[15px] opacity-100 rotate-0 flex flex-col gap-[16px]">
              <div className="flex items-center justify-end gap-[4px] w-[135.58px] h-[20px] opacity-100 rotate-0">
                <img src={hand} alt="hand" className="w-[16px] h-[16px]" />
                <p className="w-[116.92px] h-[20px] text-[20px] leading-[24px] font-medium text-right align-middle">
                  تعليمات
                </p>
              </div>

              <ul className="w-[422px] h-[120px] text-[20px] leading-[30px] font-normal text-right align-middle list-disc pr-5">
                <li>الصيام 12 ساعة قبل العملية</li>
                <li>إجراء تحاليل شاملة وأشعة</li>
                <li>إيقاف أدوية السيولة قبل أسبوع</li>
                <li>الإقامة بالمستشفى 5-7 أيام</li>
              </ul>
            </div>

            <div className="w-[422px] h-[156px] pt-[15px] opacity-100 rotate-0 flex flex-col gap-[16px]">
              <div className="flex items-center justify-end gap-[4px] w-[135.58px] h-[20px] opacity-100 rotate-0">
                <img src={star} alt="hand" className="w-[16px] h-[16px]" />
                <p className="w-[116.92px] h-[20px] text-[20px] leading-[24px] font-medium text-right align-middle">
                  المميزات
                </p>
              </div>

              <ul className="w-[422px] h-[120px] text-[20px] leading-[30px] font-normal text-right align-middle list-disc pr-5">
                <li>فريق طبي متخصص</li>
                <li>تجهيزات طبية حديثة</li>
                <li>متابعة طبية مستمرة</li>
              </ul>
            </div>
          </div>
          <div className="w-[551px] h-[575.58px] opacity-100 rotate-0 flex flex-col gap-[8px]">
            <div className="w-[551px] h-[451px] pt-[8px] pb-[8px]">
              <img
                src={icu}
                alt="doc"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            <div className="w-[552px] h-[116.58px] flex gap-[8px]">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-[132px] h-[116.58px] rounded-[8px] p-[8px] border border-dashed border-gray-400 border-[1px] flex items-center justify-center"
                >
                  <img
                    src={icu}
                    alt={`icu-${i}`}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartContainer;
