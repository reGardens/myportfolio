import anime from "animejs";
import React, { useEffect, useRef } from "react";

// images
const gw = "../../../../public/images/gw.webp";
const groot = "../../../../public/images/groot.webp";

const Home = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    // s animation
    animationRef.current = anime({
      targets: ".imgGw",
      translateX: [-250, 0],
      translateY: [250, 0],
      opacity: [0, 1],
      scale: [0, 1],
      easing: "easeInOutSine",
      duration: 1000,
    });
    animationRef.current = anime({
      targets: ".imgGroot",
      translateX: [250, 0],
      translateY: [250, 0],
      opacity: [0, 1],
      scale: [0, 1],
      easing: "easeInOutSine",
      duration: 1000,
    });
    animationRef.current = anime({
      targets: ".mobileDesc",
      translateY: [-250, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 900,
    });
    // e animation
  }, []);

  return (
    <>
      <h1 className="text-center absolute mx-auto opacity-0">
        Portfolio Reza Bagus Pratamaa
      </h1>

      <header className="max-w-screen-2xl bg-defaultBlack flex justify-between gap-60 mx-auto max-h-[35rem] relative !overflow-y-hidden">
        <div className="absolute w-3/5 h-full bg-customOrange">&nbsp;</div>

        {/* image me */}
        <div className="bg-customOrange relative">
          <img src={gw} alt="" className="imgGw w-[30rem]" />
        </div>

        {/* image groot */}
        <div className="">
          <img src={groot} alt="" className="imgGroot w-[30rem]" />
        </div>

        {/* description */}
        <div className="mobileDesc absolute flex flex-col justify-center items-center w-full h-2/3 text-[#ffffff]">
          <p className="text-4xl font-bold">Hi, I'm Reza Bagus Pratama</p>
          <p>Front-End Web Developer</p>
          <p className="bg-defaultBlack text-customOrange">
            As a web developer, I am also a competitive programmer and tech
            <br />
            enthusiast.
          </p>
        </div>
      </header>
    </>
  );
};

export default Home;
