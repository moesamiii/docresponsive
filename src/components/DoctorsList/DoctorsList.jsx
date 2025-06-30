import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../store/doctorsSlice";
import DoctorCard from "../DoctorCard/DoctorCard";
import PaginationControls from "./PaginationControls";

const DoctorsList = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error, currentPage, totalPages } = useSelector(
    (state) => state.doctors
  );
  const currentLang = useSelector((state) => state.language.current);

  useEffect(() => {
    dispatch(fetchDoctors({ pageNumber: currentPage, pageSize: 12 }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(fetchDoctors({ pageNumber: page, pageSize: 12 }));
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        {currentLang === "en" ? "Loading..." : "جارٍ التحميل..."}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {currentLang === "en" ? `Error: ${error}` : `حدث خطأ: ${error}`}
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 py-6 flex flex-col items-center">
      <div
        className="
          grid 
          grid-cols-2       
          sm:grid-cols-2
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-x-4 
          gap-y-6 
          max-w-[1008px] 
          w-full
        "
      >
        {doctors.map((item) => {
          const doctor = item.doctor.doctorPersonalInfo;

          const name =
            currentLang === "en"
              ? doctor.englishName || "Name not available"
              : doctor.arabicName || "الاسم غير متوفر";

          const specialization =
            currentLang === "en"
              ? item.additionalData?.englishSpecialization || "Not specified"
              : item.additionalData?.arabicSpecialization || "غير محدد";

          const rating = doctor.averageRating || "0";

          return (
            <DoctorCard
              key={doctor.userId}
              name={name}
              specialization={specialization}
              rating={rating}
              image={doctor.userImage}
              language={currentLang}
            />
          );
        })}
      </div>

      {/* pagination */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DoctorsList;
