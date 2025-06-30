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

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] px-[85px] pt-[64px] pb-[64px]">
      <div className="w-full max-w-[1280px] h-[385px] px-4 mx-auto gap-[36px]">
        <div className="w-[1248px] h-[292px] flex gap-[32px]">
          {/* first right container */}
          <div className="w-[288px] h-[292px] flex flex-col gap-[24px]">
            <img
              src={footerLogo}
              alt="Footer Logo"
              className="w-[131.54px] h-[36px]"
            />
            <div
              className="w-[288px] h-[72px] text-[16px] leading-[24px] font-normal text-right text-[#9CA3AF]"
              style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
            >
              نقدم خدمات طبية متميزة بأعلى معايير الجودة والرفاهية، نجلب الرعاية
              الصحية المتكاملة إلى منزلك.
            </div>

            <div className="w-[330px] h-[32px] flex flex-col gap-[4px]">
              <div className="flex gap-[10px]">
                {/* Facebook Icon */}
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={facebookIcon}
                    alt="Facebook Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>

                {/* LinkedIn Icon */}
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>

                {/* youtube icon */}
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={youtubeIcon}
                    alt="YouTube Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>

                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img src={xIcon} alt="X Icon" className="w-[12px] h-[12px]" />
                </div>

                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={instagramIcon}
                    alt="Instagram Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>

                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={threadIcon}
                    alt="Thread Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>

                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={tiktokIcon}
                    alt="TikTok Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>

                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#1F2937] flex items-center justify-center p-[7px]">
                  <img
                    src={snapIcon}
                    alt="Snapchat Icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
