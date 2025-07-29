import React from "react";
import { installationData } from "../data";

const InstallProcess = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="lg:text-4xl text-xl lg:w-[80%] w-[90%] text-center font-extrabold p-6 bg-red-300">
        ইন্সটল করার জন্য কি কি করতে হবে ?
      </div>
      <div className="grid gap-4 p-4 lg:w-[80%] w-[90%]">
        {installationData.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-2 rounded-xl shadow-md gap-3"
          >
            <div className="text-red-500 mt-1 text-xl">✅</div>
            <div>
              <strong>{item.title}:</strong> {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallProcess;
