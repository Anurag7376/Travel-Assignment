import React from "react";

const TestimonialCard = ({ data }) => {
  return (
    <div className="w-[300px] h-[200px] bg-white shadow-md rounded-lg p-6 flex flex-col border object-contain overflow-auto ">
  
      <div className="flex flex-row items-start justify-between gap-4">
        <img
          src={data.img}
          className="w-16 h-16 rounded-full object-cover border-2 border-[rgba(119,200,200,255)]"
        />
        <div className="text-right mt-4">
        <p className="text-[rgba(119,200,200,255)] font-semibold">{data.name}</p>
      </div>
      </div>

       <p className="text-gray-700 text-sm italic">
          "{data.comment}"
        </p>
    </div>
  );
};

export default TestimonialCard;
