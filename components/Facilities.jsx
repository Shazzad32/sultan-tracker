// "use client";
// import React from "react";
// import { gpsFeatures } from "../data";
// import { motion } from "framer-motion";

// const Facilities = () => {
//   return (
//     <div className="w-full  flex flex-col justify-center items-center gap-2">
//       <div className="w-[95%] lg:w-[80%] h-[90%] flex justify-center items-center flex-col mt-4">
//         <img
//           src={
//             "https://cdn.dribbble.com/userupload/11278475/file/original-899052020da0462b19d573aec6cca991.jpg?resize=752x&vertical=center"
//           }
//           alt="ing"
//           className="w-full"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="lg:text-4xl text-xl w-full  rounded-md mt-2 mb-2 text-center font-extrabold p-4 text-white bg-gray-700"
//         >
//           সুলতান জিপিএস ট্র্যাকার-এর বিশেষ সুবিধাসমূহ
//         </motion.div>
//         <div className="grid gap-4">
//           {gpsFeatures.map((item, index) => (
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               key={index}
//               className="flex  w-full items-start p-2 rounded-xl shadow-md border-b-2 border-orange-600 bg-white gap-3"
//             >
//               <div className="text-justify p-2">
//                 <strong>{item.title}:</strong> {item.description}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facilities;
"use client";
import React from "react";
import { gpsFeatures } from "../data";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // প্রতিটা item দেরি করে আসবে
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Facilities = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div className="w-[95%] lg:w-[80%] h-[90%] flex justify-center items-center flex-col mt-4">
        {/* Image Animation */}
        <motion.img
          src="https://cdn.dribbble.com/userupload/11278475/file/original-899052020da0462b19d573aec6cca991.jpg?resize=752x&vertical=center"
          alt="ing"
          className="w-full rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Title Pulse Animation */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="lg:text-4xl text-xl w-full rounded-md mt-4 mb-6 text-center font-extrabold p-4 text-white bg-gradient-to-r from-orange-500 to-red-600 shadow-xl"
        >
          সুলতান জিপিএস ট্র্যাকার-এর বিশেষ সুবিধাসমূহ
        </motion.div>

        {/* Features List with Stagger Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 w-full"
        >
          {gpsFeatures.map((itemData, index) => (
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              key={index}
              className="flex w-full items-start p-4 rounded-xl bg-white border border-orange-200"
            >
              <div className="text-justify">
                <strong className="text-orange-600">{itemData.title}:</strong>{" "}
                {itemData.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities;
