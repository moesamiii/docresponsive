import React from "react";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-[8px] mt-8 flex-wrap">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-[53.42px] h-[53.42px] rounded-full border border-[#D8D8D8] text-xl text-[#000000] shadow hover:shadow-md disabled:opacity-40"
      >
        →
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[53.42px] h-[53.42px] rounded-full border border-[#D8D8D8] text-base font-medium
            ${
              currentPage === page
                ? "bg-[#0798F1] text-white"
                : "bg-white text-black hover:shadow-md"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-[53.42px] h-[53.42px] rounded-full border border-[#D8D8D8] text-xl text-[#000000] shadow hover:shadow-md disabled:opacity-40"
      >
        ←
      </button>
    </div>
  );
};

export default PaginationControls;
