import React from "react";

const PageBar = (props) => {
    const {currentPage, pagesCount, handlePageChange, itemsPerPage } = props

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
   
  return (
    <div className="mt-3 mx-auto px-3 my-5 md:w-auto  flex justify-between max-w-[1800px]">
      <button
        className={`${ currentPage === 1 ? 'bg-gray-300': 'bg-blue'} px-8 py-2 rounded-lg hover:scale-105 `}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev 
      </button>
      <ul className="flex overflow-x-auto w-72 md:w-auto">
        {Array.from({ length: pagesCount }, (_, index) => (
          <li 
            key={index}
            className={`mx-2 ${
              index + 1 === currentPage ? "bg-blue" : "bg-gray-300"
            } hover:scale-105  `}
          >
            <button
              className="px-3 py-2"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={`${ currentPage === pagesCount ? 'bg-gray-300': 'bg-blue'} px-8 py-2 rounded-lg hover:scale-105 `}
        disabled={currentPage === pagesCount}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PageBar;