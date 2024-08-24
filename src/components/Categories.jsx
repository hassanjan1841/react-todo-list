import React from "react";
const categories = ["All", "Completed", "Not Completed"];
const Categories = ({ onClick }) => {
  return (
    <div className="flex max-w-[800px] mb-5">
      <div className="flex justify-start gap-5 w-full ">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="bg-slate-700 py-2 px-4 rounded-md text-white text-bold hover:text-gray-900 hover:bg-gray-100  hover:border hover:border-black hover:cursor-pointer"
              onClick={() => onClick(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
