import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

// Define props explicitly
type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  totalRecords: number;
  countsPerPage: number;
};

const Pagination = ({
  currentPage = 1,
  setCurrentPage = () => {},
  totalRecords = 0,
  countsPerPage = 10,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalRecords / countsPerPage);

  // Calculate starting and ending item numbers for current page
  const startItem = (currentPage - 1) * countsPerPage + 1;
  let endItem = startItem - 1 + countsPerPage;
  if (endItem > totalRecords) {
    endItem = totalRecords;
  }

  // Go to previous page
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // Go to next page
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Navigate to a specific page
  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  // Generate page numbers with ellipses (...) for large datasets
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        if (currentPage >= 4) {
          pages.push("...");
        }
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        if (totalPages - currentPage > 2) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-between">
      <div className="gap-1 text-sm text-[#111928] items-center flex">
        {/* Showing X - Y of Z */}
        <span className="text-[#6B7280]">Showing</span>
        <span className="font-semibold">{startItem}</span>-
        <span className="font-semibold">{endItem}</span>
        <span className="text-[#6B7280]">of</span>
        <span className="font-semibold">{totalRecords}</span>
      </div>

      {/* Pagination controls */}
      <div className="border rounded">
        <button
          className="border-r px-4 py-2 disabled:bg-[#E5E7EB]"
          disabled={currentPage === 1}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            className={`border-r px-4 py-2 ${
              currentPage === page
                ? "font-semibold bg-[#E1EFFE] text-[#1C64F2]"
                : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="px-4 py-2 disabled:bg-[#E5E7EB]"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination);
