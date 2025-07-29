"use client";
import Image from "next/image";
import OrderNowButton from "./OrderNowButton";

const ProductCard = ({ image, name, price_1, price_2, price_3 }) => {
  return (
    <div className="w-[300px] h-auto gap-3  bg-white shadow-lg border-1 border-amber-600 rounded-2xl overflow-hidden flex flex-col items-center p-3 hover:shadow-2xl transition-all duration-300">
      <div className="w-full h-[220px] relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          // objectFit="cover"
          className="rounded-xl p-4"
        />
      </div>

      <div className="w-full p-2 rounded-md bg-green-500 uppercase text-white text-xl font-bold flex items-center justify-center">
        {name}
      </div>

      <p className="font-bold">
        রেগুলার প্রাইস-<del className="text-red-500">{price_1}</del>-টাকা
      </p>
      <p className="text-orange-600 font-bold text-xl">
        স্পেশাল অফার প্রাইস-<strong className="text-red-500">{price_2}</strong>
        -টাকা
      </p>
      <div className="h-[30px] w-3/4 rounded-md border-2 border-amber-600 flex items-center justify-center">
        মাসিক বিল মাত্র {price_3} টাকা
      </div>

      <div className="mt-4 w-full flex justify-center">
        <OrderNowButton />
      </div>
    </div>
  );
};

export default ProductCard;
