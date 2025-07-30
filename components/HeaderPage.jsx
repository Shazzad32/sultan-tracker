import React from "react";
import OrderNowButton from "./OrderNowButton";

const HeaderPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 p-4">
      <img
        src="https://sultantracker.com/static/media/logo.ffc7a59c.svg"
        alt="logo"
        className="h-[70px] w-[200px]"
      />
      <div className="lg:text-4xl text-[#fd781e] text-2xl p-4  text-center font-extrabold lg:w-[80%] w-[95%]">
        গাড়ি চুরির ভয় <strong className="text-white">SULTAN TRACKER</strong>{" "}
        থাকলে আর নয়!
      </div>

      <div className="lg:w-[80%] full  shadow-md  text-white rounded-b-md lg:text-2xl sm:text-xl font-extrabold p-4 text-center flex flex-col items-center justify-center">
        <h1>গাড়ি হারিয়ে গেলে আফসোস নয়, আগেই থাকুন নিরাপদ</h1>{" "}
        <h1>সুলতান ট্র্যাকার থাকলে চোরের খবর পেয়ে যাবেন এক ক্লিকেই!</h1>
      </div>
      {/* <OrderNowButton /> */}
    </div>
  );
};

export default HeaderPage;
