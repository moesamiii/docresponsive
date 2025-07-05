import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MedicalTourismHeader from "./components/MedicalTourismHeader/MedicalTourismHeader";
import Footer from "./components/Footer/Footer";
import HeartContainer from "./components/HeartContainer/HeartContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <MedicalTourismHeader />
      <HeartContainer />
      <Footer />
    </>
  );
};

export default App;
