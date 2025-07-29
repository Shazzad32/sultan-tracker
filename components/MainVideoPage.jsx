// "use client";
// import React from "react";
// import OrderNowButton from "./OrderNowButton";

// const MainVideoPage = () => {
//   const videoUrl =
//     "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsultanvts%2Fvideos%2F866982688369476&show_text=false&autoplay=false";

//   return (
//     <div className="w-full flex flex-col justify-center items-center p-4">
//       <div className="lg:w-[80%] w-[95%] aspect-video rounded-lg overflow-hidden shadow-lg">
//         <iframe
//           className="w-full h-full"
//           src={videoUrl}
//           title="Facebook Video"
//           frameBorder="0"
//           allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//       </div>

//       <div className="mt-4">
//         <OrderNowButton />
//       </div>
//     </div>
//   );
// };

// export default MainVideoPage;
// "use client";
import React from "react";
import OrderNowButton from "./OrderNowButton";

const MainVideoPage = ({ videoSource = "" }) => {
  const isExternalVideo = (url) =>
    url.startsWith("http://") || url.startsWith("https://");

  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <div className="lg:w-[80%] w-[95%] aspect-video rounded-lg overflow-hidden shadow-lg border-8 border-amber-50">
        {isExternalVideo(videoSource) ? (
          <iframe
            className="w-full h-full"
            src={videoSource}
            title="External Video"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <video className="w-full h-full object-cover" controls>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="mt-4">
        <OrderNowButton />
      </div>
    </div>
  );
};

export default MainVideoPage;
