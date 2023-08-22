import React from "react";

const MediaComponentDekstop = ({ url }) => {
  const isImage = url.endsWith(".png");

  if (isImage) {
    return <img src={url} alt="" className="w-96 h-full drop-shadow-2xl bg-red-400" />;
  }

  return (
    <video
      src={url}
      type="video/mp4"
      autoPlay
      loop
      muted
      //   className="md:basis-[120px] w-full h-full"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default MediaComponentDekstop;
