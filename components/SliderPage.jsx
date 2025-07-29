"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import img_1 from "../images/image_1.jpg";
import img_2 from "../images/image_2.jpg";
import img_3 from "../images/image_3.jpg";
import img_4 from "../images/image_4.jpg";
import img_5 from "../images/image_5.jpg";
import img_6 from "../images/image_6.jpg";
import img_7 from "../images/image_7.jpg";

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];

const SliderPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[80%] w-full h-full p-2 ">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md border-2 border-amber-700">
                <Image
                  src={img}
                  alt={`image-${index}`}
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderPage;
