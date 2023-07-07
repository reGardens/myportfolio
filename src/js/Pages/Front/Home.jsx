import anime from "animejs";
import React, { useEffect, useRef } from "react";

// images
import gw from "../../../assets/images/gw.webp";
import groot from "../../../assets/images/groot.webp";

const Home = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    // s animation
    animationRef.current = anime({
      targets: ".dummyOrange",
      translateX: [-30, 0],
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 3000,
    });
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
    <div className="font-futura">
      {/* seo */}
      <h1 className="text-center absolute mx-auto opacity-0">
        Portfolio Reza Bagus Pratamaa
      </h1>

      <header className="max-w-screen-2xl bg-defaultBlack flex justify-between gap-60 mx-auto max-h-[35rem] relative !overflow-y-hidden">
        <div className="dummyOrange absolute w-3/5 h-full bg-customOrange">
          &nbsp;
        </div>
        {/* image me */}
        <div className="bg-customOrange relative">
          <img src={gw} alt="" className="imgGw w-[30rem]" />
        </div>

        {/* image groot */}
        <div className="overflow-hidden">
          <img src={groot} alt="" className="imgGroot w-[30rem]" />
        </div>

        {/* description */}
        <div className="mobileDesc absolute flex justify-center items-center w-full h-2/3 text-[#ffffff]">
          <div className="w-[27rem] flex flex-col gap-6">
            <p className="text-4xl font-bold">Hi, I'm Reza Bagus Pratama</p>

            <div className="">
              <p className="text-4xl bg-defaultBlack font-bold p-2 text-customOrange">
                Front-End Web Developer
              </p>
            </div>

            <p className="">
              As a web developer, I am also a competitive programmer and
              <br />
              tech enthusiast.
            </p>

            <div class="mail">
              <a class="">
                <h3>Email:</h3>
                <h3 class="opacity">Rezzabagus.rb@gmail.com</h3>
              </a>

              <a href="https://drive.google.com/uc?export=download&id=1b6aiPsC2rgC1b9dSGY4WhGiZDzmlxlIK">
                <h3>Download My Resume</h3>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
