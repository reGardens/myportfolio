import React from "react";

const MediaComponentMobile = ({ url }) => {
  const isImage = url.endsWith(".png");

  if (isImage) {
    return (
      <img
        src={url}
        alt=""
        className="object-contain drop-shadow-2xl h-[20rem] w-52 md:h-full bg-green-500"
      />
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <video
        src={url}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="w-52 h-full bg-blue-400"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MediaComponentMobile;
