import React from "react";

export const MediaComponentDekstop = ({ url }) => {
  const isImage = url.endsWith(".png");

  if (isImage) {
    return <img src={url} alt="" className="w-96 h-full drop-shadow-2xl" />;
  }

  return (
    <video
      src={url}
      type="video/mp4"
      autoPlay
      loop
      muted
      className="md:basis-[120px] w-full h-full"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export const MediaComponentTablet = ({ url }) => {
  const isImage = url.endsWith(".png");

  if (isImage) {
    return (
      <img
        src={url}
        alt=""
        className="w-72 h-full drop-shadow-2xl rounded-2xl border overflow-hidden"
      />
    );
  }

  return (
    <video
      src={url}
      type="video/mp4"
      autoPlay
      loop
      muted
      className="w-60 h-full rounded-3xl border overflow-hidden"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export const MediaComponentMobile = ({ url }) => {
  const isImage = url.endsWith(".png");

  if (isImage) {
    return (
      <img
        src={url}
        alt=""
        className="object-contain drop-shadow-2xl h-[20rem] md:h-full rounded-2xl border border-red-500 overflow-hidden"
      />
    );
  }

  return (
    <video
      src={url}
      type="video/mp4"
      autoPlay
      loop
      muted
      className="w-40 h-full rounded-3xl border border-red-500 overflow-hidden"
    >
      Your browser does not support the video tag.
    </video>
  );
};
