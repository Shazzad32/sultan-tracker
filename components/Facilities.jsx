import React from "react";
import { gpsFeatures } from "../data";

const Facilities = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-2">
      <div className="w-[95%] lg:w-[80%] h-[90%] flex justify-center items-center flex-col mt-4">
        <img
          src={
            "https://cdn.dribbble.com/userupload/11278475/file/original-899052020da0462b19d573aec6cca991.jpg?resize=752x&vertical=center"
          }
          alt="ing"
          className="w-full"
        />
        <div className="lg:text-4xl text-xl w-full  rounded-md mt-2 mb-2 text-center font-extrabold p-4 text-white bg-gray-700">
          সুলতান জিপিএস ট্র্যাকার-এর বিশেষ সুবিধাসমূহ
        </div>
        <div className="grid gap-4">
          {gpsFeatures.map((item, index) => (
            <div
              key={index}
              className="flex  w-full items-start p-2 rounded-xl shadow-md border-b-2 border-orange-600 bg-white gap-3"
            >
              <div className="text-justify p-2">
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
