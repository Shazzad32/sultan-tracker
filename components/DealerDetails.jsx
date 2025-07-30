import React from "react";
import { dealerDetails } from "../data";

const DealerDetails = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="lg:text-4xl mt-2 text-xl lg:w-[80%] w-full text-center font-extrabold rounded-md p-6 text-white bg-gray-700">
        ডিলারশিপ আগ্রহী দের জন্য সুবিধা
      </div>
      <div className="grid gap-3 p-2 lg:w-[80%] full">
        {dealerDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-2 rounded-xl shadow-md gap-3 border-b-2 border-orange-600"
          >
            <div className="text-red-500 mt-1 text-xl">👉</div>
            <div className="text-justify">
              <strong>{item.title}:</strong> {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerDetails;
