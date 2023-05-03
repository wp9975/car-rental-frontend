import React from "react";

const PageBar = (props) => {
  const { currentPage, pagesCount, handlePageChange, itemsPerPage } = props;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="mt-3 mx-auto w-full px-3 my-5 max-w-[1800px]">
      <div className="flex justify-between items-center">
        <button
          className={`text-gray-600 ${
            currentPage === 1 ? "pointer-events-none" : "hover:text-black"
          } transition-colors duration-200`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <ul className="flex">
          {Array.from({ length: pagesCount }, (_, index) => (
            <li
              key={index}
              className={`mx-2 ${
                index + 1 === currentPage
                  ? "text-blue-600 font-bold"
                  : "text-gray-600"
              } hover:text-black transition-colors duration-200`}
            >
              <button
                className="px-3 py-2 rounded-full focus:outline-none"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`text-gray-600 ${
            currentPage === pagesCount
              ? "pointer-events-none"
              : "hover:text-black"
          } transition-colors duration-200`}
          disabled={currentPage === pagesCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PageBar;
