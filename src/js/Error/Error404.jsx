import React from "react";

import updateMaintenance from "../../assets/Error/update-maintenance.gif";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="bg-[#FCFCFF] h-screen flex justify-center items-center font-futura">
      <div className="grid md:grid-cols-2 justify-center items-center relative h-none">
        <div className="w-full h-full">
          <img src={updateMaintenance} alt="updateMaintenance" className="w-full h-full" />
        </div>

        <div className="w-full flex justify-center">
          {/* if finish use it */}
          <a href="#inDekstop" className="hidden md:block bg-[#FCFCAA] rounded-lg">
            <p className="py-2 px-3 font-extrabold font-futura text-[#002455]">
              <span className="font-normal">
                This page is currently under maintenance
              </span>
              {/* <br />
              if you want to view it please click or scroll */}
            </p>
          </a>
          <a href="#inMobile" className="block md:hidden bg-[#FCFCAA] rounded-lg">
            <p className="py-2 px-3 font-extrabold font-futura text-[#002455]">
              <span className="font-normal">
                This page is currently under maintenance
              </span>
              <br />
              if you want to view it please click or scroll
            </p>
          </a>
          {/* ------ */}
        </div>
      </div>
    </div>
  );
};

export default Error404;
