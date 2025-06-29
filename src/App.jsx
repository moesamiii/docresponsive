import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MedicalTourismHeader from "./components/MedicalTourismHeader/MedicalTourismHeader";
import SpecializationList from "./components/SpecializationList/SpecializationList";
import DoctorsList from "./components/DoctorsList/DoctorsList";

const App = () => {
  return (
    <>
      <Navbar />
      <MedicalTourismHeader />

      <div className="flex justify-center mt-4">
        <div className="flex flex-col md:flex-row gap-4 max-w-[1440px] w-full px-4">
          {/* sidebar special */}
          <div className="w-full md:w-[230px]">
            <SpecializationList />
          </div>

          {/* docs list */}
          <div className="flex-1">
            <DoctorsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
