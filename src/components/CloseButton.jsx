import React from "react";

const CloseButton = ({ onClick = () => {}, styles, textColor }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles && "absolute top-3 end-2.5"} ${
        textColor ? textColor : "bg-gray-800"
      } bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center`}
      data-modal-hide="popup-modal"
    >
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
