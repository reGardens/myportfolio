import React, { useRef } from "react";
import { Link } from "react-router-dom";

// pages
import { RibbonAboutMe } from "./AnimationParallax";

// images
import orangeRibbon from "../../assets/images/orange-ribbon.png";
import anime from "animejs";

// icons
import ig from "../../assets/icons/004-instagram.png";
import whatsapp from "../../assets/icons/003-whatsapp.png";
import fb from "../../assets/icons/002-facebook.png";
import github from "../../assets/icons/005-github.png";
import linkedin from "../../assets/icons/001-linkedin.png";

export const RibbonOrange = () => {
  const animationRef = useRef(null);

  const handleEnterView = () => {
    animationRef.current = anime({
      targets: ".ribbonOrange",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 900,
    });
  };

  return (
    <RibbonAboutMe onEnterView={handleEnterView}>
      <div className="ribbonOrange -translate-x-full relative flex justify-start px-4 lg:px-14">
        <div className="relative">
          <div className="h-[3rem] sm:h-full">
            <img src={orangeRibbon} alt="" className="h-full" />
          </div>
          <p
            className={`absolute top-0 right-5 text-4xl text-right h-full flex items-center font-extrabold tracking-widest`}
          >
            About Me
          </p>
        </div>
      </div>
    </RibbonAboutMe>
  );
};

export const RibbonOrangeReverse = () => {
  const animationRef = useRef(null);

  const handleEnterView = () => {
    animationRef.current = anime({
      targets: ".ribbonOrangeReversew",
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 900,
    });
  };

  return (
    <RibbonAboutMe onEnterView={handleEnterView}>
      <div className="ribbonOrangeReversew translate-x-full relative flex justify-end mb-4 px-4 lg:px-14">
        <div className="relative">
          <div className="h-[3rem] sm:h-full">
            <img src={orangeRibbon} alt="" className="-scale-x-[1] h-full" />
          </div>

          <div
            className={`absolute top-0 left-5 text-[11px] sm:text-5xl text-right h-full flex items-center gap-6 font-extrabold text-white tracking-widest`}
          >
            <Link to="https://www.instagram.com/rezza1784/">
              <div className="bg-defaultBlack p-0 sm:p-2 rounded-full">
                <img src={ig} alt="" className="" />
              </div>
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=6281311369424">
              <div className="bg-defaultBlack p-0 sm:p-2 rounded-full">
                <img src={whatsapp} alt="" className="" />
              </div>
            </Link>
            <Link to="https://web.facebook.com/rezza.tmz/">
              <div className="bg-defaultBlack p-0 sm:p-2 rounded-full">
                <img src={fb} alt="" className="" />
              </div>
            </Link>
            <Link to="https://github.com/reGardens/">
              <div className="bg-defaultBlack p-0 sm:p-2 rounded-full">
                <img src={github} alt="" className="" />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/reza-bagus-pratama-a802bb189">
              <div className="bg-defaultBlack p-0 sm:p-2 rounded-full">
                <img src={linkedin} alt="" className="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </RibbonAboutMe>
  );
};
