// import React from "react";
// import HeaderPage from "./HeaderPage";
// import MainVideoPage from "./MainVideoPage";
// import OrderPage from "./OrderPage";
// import Facilities from "./Facilities";
// import WhyBuy from "./WhyBuy";
// import Review from "./Review";
// import SliderPage from "./SliderPage";
// import ProductShowcase from "./ProductShowcase";
// import InstallProcess from "./InstallProcess";

// const MainPage = () => {
//   return (
//     <div className="">
//       <HeaderPage />
//       <MainVideoPage />
//       <SliderPage />
//       <Facilities />
//       <ProductShowcase />
//       <WhyBuy />
//       <Review />
//       <InstallProcess />
//       <OrderPage />
//     </div>
//   );
// };

// export default MainPage;

import React from "react";
import HeaderPage from "./HeaderPage";
import MainVideoPage from "./MainVideoPage";
import OrderPage from "./OrderPage";
import Facilities from "./Facilities";
import WhyBuy from "./WhyBuy";
import Review from "./Review";
import SliderPage from "./SliderPage";
import ProductShowcase from "./ProductShowcase";
import InstallProcess from "./InstallProcess";

import img from "../images/background.png";

const MainPage = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0" />
        <div className="relative z-10">
          <HeaderPage />
          <MainVideoPage videoSource="/videos/intro_video.mp4" />
          <SliderPage />
        </div>
      </div>
      <Facilities />
      <ProductShowcase />
      <WhyBuy />
      <Review />
      <InstallProcess />
      <OrderPage />
    </div>
  );
};

export default MainPage;
