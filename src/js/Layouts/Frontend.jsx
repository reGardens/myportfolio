import React from "react";
import Home from "../Pages/Front/Home";
import SmoothScroll from "../Components/SmoothScroll/SmoothScroll";

const Frontend = () => {
  return (
    <SmoothScroll>
      <div className="overflow-x-hidden">
        <Home />
      </div>
    </SmoothScroll>
  );
};

export default Frontend;
