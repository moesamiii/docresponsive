import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MedicalTourismHeader from "./components/MedicalTourismHeader/MedicalTourismHeader";
import Footer from "./components/Footer/Footer";
import HeartContainer from "./components/HeartContainer/HeartContainer";
import DoctorCard2 from "./components/DoctorCard/DoctorCard2";
import DoctorList2 from "./components/DoctorCard/DoctorList2";

const App = () => {
  return (
    <>
      <Navbar />
      <MedicalTourismHeader />
      <HeartContainer />

      <DoctorList2 />

      <div className="w-full flex justify-center my-6">
        <button
          className="w-[504px] h-[52px] bg-[#0798F1] text-white text-[18px] font-medium leading-[100%] rounded-[8px] px-[22px] py-[6px]"
          style={{ fontFamily: "IBM Plex Sans Arabic" }}
        >
          احجز العملية
        </button>
      </div>

      <Footer />
    </>
  );
};

export default App;
