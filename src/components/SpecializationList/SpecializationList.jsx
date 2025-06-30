import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecializations } from "../../store/specializationSlice";
import {
  fetchDoctorsBySpecialization,
  fetchDoctors,
} from "../../store/doctorsSlice";
import {
  toggleSpecialization,
  setSpecializationOpen,
} from "../../store/uiSlice";

const SpecializationList = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(
    (state) => state.specializations
  );
  const currentLang = useSelector((state) => state.language.current);
  const isArabic = currentLang === "ar";
  const isOpen = useSelector((state) => state.ui.isSpecializationOpen);

  useEffect(() => {
    dispatch(fetchSpecializations());
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <>
      <div className="md:hidden w-full px-4 ">
        <button
          className="w-full bg-[#023554] text-white rounded-md px-4 py-2 flex justify-between items-center"
          onClick={() => dispatch(toggleSpecialization())}
        >
          <span
            className="font-medium text-sm"
            style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
          >
            {isArabic ? "اختر التخصص" : "Select Specialization"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`
          bg-[#023554]
          rounded-[16px]
          p-4
          gap-2
          shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
          flex flex-col
          overflow-y-auto
          transition-all duration-300
          ${isOpen ? "block" : "hidden"} md:block
          w-full md:w-[230px]
          max-h-[500px] md:max-h-none
        `}
      >
        <button
          className={`w-full h-[40px] bg-[#F3FAFE] rounded-[8px] flex items-center  px-3 mb-2 ${
            isArabic ? "" : ""
          }`}
          onClick={() => {
            dispatch(fetchDoctors());
            dispatch(setSpecializationOpen(false));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[#0798F1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <span
            className="text-[#0798F1] font-medium text-[18px] px-[10px]"
            style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
          >
            {isArabic ? "الكل" : "All"}
          </span>
        </button>

        {loading && <p className="text-white text-center">تحميل...</p>}
        {error && <p className="text-red-500 text-center">خطأ: {error}</p>}

        {Array.isArray(list) && list.length > 0
          ? list.map((item) => {
              const name = isArabic ? item.ar_Name : item.en_Name;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    dispatch(fetchDoctorsBySpecialization(item.id));
                    dispatch(setSpecializationOpen(false)); //
                  }}
                  className="w-full border border-transparent hover:border-white rounded-[8px] p-2 flex items-center cursor-pointer gap-2"
                >
                  <img
                    src={item.logo}
                    alt={name}
                    className="w-6 h-6 object-contain"
                  />
                  <span
                    className={`text-white text-sm truncate flex-1 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                    style={{
                      direction: isArabic ? "rtl" : "ltr",
                      fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                    }}
                    title={name}
                  >
                    {name}
                  </span>
                </div>
              );
            })
          : !loading &&
            !error && (
              <p className="text-white text-center">
                {isArabic ? "لا توجد بيانات" : "No data found"}
              </p>
            )}
      </div>
    </>
  );
};

export default SpecializationList;
