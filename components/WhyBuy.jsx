import React from "react";
import { dddd } from "../data";

const WhyBuy = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-2">
      <div className="lg:text-4xl text-xl lg:w-[80%] w-[90%] rounded-md p-4 text-center font-extrabold bg-red-300">
        আমাদের কাছ থেকেই কেন নিবেন ?
      </div>
      <div className="grid gap-4 p-4 lg:w-[80%] w-[95%]">
        {dddd.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-2 rounded-xl border-b-2 border-orange-600 shadow-md bg-white gap-3"
          >
            <div className="text-red-500 mt-1 text-xl">👉</div>
            <div className="text-justify">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBuy;
