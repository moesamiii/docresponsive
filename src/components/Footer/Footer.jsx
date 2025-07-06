import React from "react";
import footerLogo from "../../assets/fotterlogo.png";
import facebookIcon from "../../assets/facebook.png";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube.png";
import xIcon from "../../assets/xicon.png";
import instagramIcon from "../../assets/instagramicon.png";
import threadIcon from "../../assets/threadicon.png";
import tiktokIcon from "../../assets/tiktokicon.png";
import snapIcon from "../../assets/snapicon.png";
import callIcon from "../../assets/leftfootercall.png";
import mailIcon from "../../assets/leftfootermail.png";
import locationIcon from "../../assets/leftfooterlocation.png";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <footer className="w-full bg-[#111827] px-[85px] pt-[64px] pb-[64px]">
          <div className="w-full max-w-[1280px] px-4 mx-auto gap-[36px]">
            <div className="w-[1248px] h-[292px] flex gap-[70px]">
              <div className="w-[288px] h-[292px] flex flex-col gap-[24px]">
                <img
                  src={footerLogo}
                  alt="Footer Logo"
                  className="w-[131.54px] h-[36px]"
                />
                <div className="w-[288px] h-[72px] text-[16px] leading-[24px] font-normal text-right text-[#9CA3AF]">
                  نقدم خدمات طبية متميزة بأعلى معايير الجودة والرفاهية، نجلب
                  الرعاية الصحية المتكاملة إلى منزلك.
                </div>

                <div className="w-[320px] h-[32px] flex flex-col gap-[4px]">
                  <div className="flex gap-[10px]">
                    {[
                      facebookIcon,
                      linkedinIcon,
                      youtubeIcon,
                      xIcon,
                      instagramIcon,
                      threadIcon,
                      tiktokIcon,
                      snapIcon,
                    ].map((icon, index) => (
                      <div
                        key={index}
                        className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]"
                      >
                        <img
                          src={icon}
                          alt={`icon-${index}`}
                          className="w-[12px] h-[12px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-[288px] h-[292px] flex flex-col gap-[24px]">
                <div
                  className="w-[288px] h-[28px] text-[18px] leading-[28px] font-bold text-right text-white"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  الشركة
                </div>
                <div className="w-[288px] h-[132px] flex flex-col gap-[12px]">
                  {["من نحن ؟", "أنضم الينا", "الدعم", "أسئلة و أجوبة"].map(
                    (text, index) => (
                      <div
                        key={index}
                        className="text-[16px] leading-[24px] font-normal text-right text-[#9CA3AF]"
                        style={{
                          fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                        }}
                      >
                        {text}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="w-[288px] h-[292px] flex flex-col gap-[24px]">
                <div
                  className="w-[288px] h-[28px] text-[18px] leading-[28px] font-bold text-right text-white"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  خدماتنا
                </div>

                <div className="w-[288px] h-[240px] flex flex-col gap-[12px] mt-[8px]">
                  {[
                    "التحاليل",
                    "الأشعة",
                    "العيادات الخارجية",
                    "الرعاية المنزلية",
                    "السياحة العلاجية",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="text-[16px] leading-[24px] font-normal text-right text-[#9CA3AF]"
                      style={{
                        fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                      }}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[288px] h-[292px] flex flex-col gap-[24px]">
                <div
                  className="w-[288px] h-[28px] text-[18px] leading-[28px] font-bold text-right text-white"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  تواصل معنا
                </div>

                <div className="w-[288px] h-[132px] flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <img
                      src={callIcon}
                      alt="Phone Icon"
                      className="w-[16px] h-[16px]"
                    />
                    <p
                      className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] text-right flex-1"
                      style={{
                        fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                      }}
                    >
                      +962790909806
                    </p>
                  </div>

                  <div className="flex items-center gap-[12px]">
                    <img
                      src={mailIcon}
                      alt="Mail Icon"
                      className="w-[16px] h-[16px]"
                    />
                    <p
                      className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] text-right flex-1"
                      style={{
                        fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                      }}
                    >
                      info@ulmcare.jo
                    </p>
                  </div>

                  <div className="flex items-start gap-[12px]">
                    <img
                      src={locationIcon}
                      alt="Location Icon"
                      className="w-[16px] h-[16px] mt-[2px]"
                    />
                    <div className="flex flex-col text-right flex-1">
                      <p
                        className="text-[16px] leading-[24px] font-normal text-[#9CA3AF]"
                        style={{
                          fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                        }}
                      >
                        Wasfi AlTal St. P.O. Box. 5873
                      </p>
                      <p
                        className="text-[16px] leading-[24px] font-normal text-[#9CA3AF]"
                        style={{
                          fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                        }}
                      >
                        Amman - 11953 Jordan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-[#1F2937] mt-[40px] pt-[24px] flex justify-between items-center">
              <div
                className="text-[14px] font-normal text-[#9CA3AF]"
                style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              >
                جميع الحقوق محفوظة@ New ULM
              </div>

              <div className="flex gap-[32px]">
                <div
                  className="text-[14px] font-normal text-[#9CA3AF] cursor-pointer hover:text-white transition"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  سياسة الخصوصية
                </div>
                <div
                  className="text-[14px] font-normal text-[#9CA3AF] cursor-pointer hover:text-white transition"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  الشروط والأحكام
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="md:hidden w-full bg-[#111827] px-5 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <img
              src={footerLogo}
              alt="Footer Logo"
              className="w-[131.54px] h-[36px]"
            />
            <p className="text-center text-[#9CA3AF] text-sm">
              نقدم خدمات طبية متميزة بأعلى معايير الجودة والرفاهية، نجلب الرعاية
              الصحية المتكاملة إلى منزلك.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                facebookIcon,
                linkedinIcon,
                youtubeIcon,
                xIcon,
                instagramIcon,
                threadIcon,
                tiktokIcon,
                snapIcon,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center"
                >
                  <img src={icon} alt={`icon-${index}`} className="w-3 h-3" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-lg text-right">الشركة</h3>
            {["من نحن ؟", "أنضم الينا", "الدعم", "أسئلة و أجوبة"].map(
              (text, index) => (
                <p key={index} className="text-[#9CA3AF] text-sm text-right">
                  {text}
                </p>
              )
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-lg text-right">خدماتنا</h3>
            {[
              "التحاليل",
              "الأشعة",
              "العيادات الخارجية",
              "الرعاية المنزلية",
              "السياحة العلاجية",
            ].map((service, index) => (
              <p key={index} className="text-[#9CA3AF] text-sm text-right">
                {service}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-lg text-right">
              تواصل معنا
            </h3>
            <div className="flex items-center justify-end gap-2">
              <p className="text-[#9CA3AF] text-sm">+962790909806</p>
              <img src={callIcon} alt="Phone" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <p className="text-[#9CA3AF] text-sm">info@ulmcare.jo</p>
              <img src={mailIcon} alt="Mail" className="w-4 h-4" />
            </div>
            <div className="flex items-start justify-end gap-2">
              <div className="text-right">
                <p className="text-[#9CA3AF] text-sm">
                  Wasfi AlTal St. P.O. Box. 5873
                </p>
                <p className="text-[#9CA3AF] text-sm">Amman - 11953 Jordan</p>
              </div>
              <img src={locationIcon} alt="Location" className="w-4 h-4 mt-1" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-6 border-t border-[#1F2937] mt-4">
            <div className="flex gap-6">
              <p className="text-[#9CA3AF] text-xs">سياسة الخصوصية</p>
              <p className="text-[#9CA3AF] text-xs">الشروط والأحكام</p>
            </div>
            <p className="text-[#9CA3AF] text-xs">
              جميع الحقوق محفوظة@ New ULM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
