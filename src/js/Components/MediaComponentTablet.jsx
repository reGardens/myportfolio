import React from "react";

const MediaComponentTablet = ({ url }) => {
  const isImage = url.endsWith(".png");

  if (isImage) {
    return <img src={url} alt="" className="w-72 h-full drop-shadow-2xl bg-yellow-500" />;
  }

  return (
    <video
      src={url}
      type="video/mp4"
      autoPlay
      loop
      muted
      className="w-72 h-full"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default MediaComponentTablet;
