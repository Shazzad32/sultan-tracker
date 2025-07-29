import React from "react";
import { gpsFeatures } from "../data";

const Facilities = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-2">
      <div className="lg:text-4xl text-xl lg:w-[80%] w-[90%]  rounded-md mt-2 mb-2 text-center font-extrabold p-4 bg-red-300">
        সুলতান জিপিএস ট্র্যাকার-এর বিশেষ সুবিধাসমূহ
      </div>
      <div className="w-[95%] lg:w-[80%] h-[90%] flex justify-center items-center flex-col">
        <img
          src={
            "https://cdn.dribbble.com/userupload/11278475/file/original-899052020da0462b19d573aec6cca991.jpg?resize=752x&vertical=center"
          }
          alt="ing"
          className="w-[74%]"
        />
        <div className="grid gap-4 p-4">
          {gpsFeatures.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-2 rounded-xl shadow-md border-b-2 border-orange-600 bg-white gap-3"
            >
              <div className="text-red-500 mt-1 text-xl">👉</div>
              <div className="text-justify">
                <strong>{item.title}:</strong> {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
