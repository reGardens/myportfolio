import React from "react";
import Home from "../Pages/Front/Home";
import Error404 from "../Error/Error404";
import SmoothScroll from "../Components/SmoothScroll/SmoothScroll";

const Frontend = () => {
  return (
    // <SmoothScroll>
    <div className="overflow-x-hidden">
      <Error404 />
      <Home />
    </div>
    // </SmoothScroll>
  );
};

export default Frontend;
