import React from "react";

import pages404 from "../../assets/Error/404.gif";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="bg-[#FCFCFF] h-screen flex justify-center items-center font-futura">
      <div className="flex justify-center items-center relative h-none bg-blue-400">
        <img src={pages404} alt="pages404" className="" />

        <div className="absolute bottom-24 left-0 w-full flex justify-center">
          <Link to="/" className="bg-[#FCFCAA] rounded-lg">
            <p className="py-2 px-3 font-extrabold font-futura text-[#002455]">
              Back To Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
