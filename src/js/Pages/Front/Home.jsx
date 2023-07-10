import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

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

  // s parallax effect
  // const listMenu = useParallax({
  //   rotateX: [0, 20],
  //   opacity: [1, 0.3],
  //   scale: [1.05, 1, "easeOutCubic"],
  //   shouldAlwaysCompleteAnimation: true,
  // });

  return (
    <div className="max-w-screen-2xl mx-auto font-futura">
      {/* seo */}
      <h1 className="text-center absolute mx-auto opacity-0">
        Portfolio Reza Bagus Pratamaa
      </h1>

      {/* max-h-[35rem] */}
      <header className="bg-defaultBlack flex justify-between gap-60 mx-auto max-h-[35rem] relative !overflow-hidden">
        <div className="dummyOrange absolute w-3/5 h-full bg-customOrange ove">
          &nbsp;
        </div>
        {/* image me */}
        <Parallax speed={-20} translateX={[10, -20]}>
          <div className="bg-customOrange relative overflow-hidden">
            <img src={gw} alt="" className="imgGw w-[30rem]" />
          </div>
        </Parallax>

        {/* image groot */}
        <Parallax speed={-15} translateX={[-10, 20]}>
          <div className="overflow-hidden">
            <img src={groot} alt="" className="imgGroot w-[30rem]" />
          </div>
        </Parallax>

        {/* description */}
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-[#ffffff]">
          <Parallax speed={-10} easeOut>
            <div className="w-[27rem] flex flex-col gap-6">
              <p className="text-4xl font-bold">Hi, I'm Reza Bagus Pratama</p>

              <div className="">
                <p className="text-4xl bg-defaultBlack shadow-lg rounded-md font-bold p-2 text-customOrange">
                  Front-End Web Developer
                </p>
              </div>

              <p className="">
                As a web developer, I am also a competitive programmer and
                <br />
                tech enthusiast.
              </p>

              <div className="flex justify-start gap-7">
                <a
                  href="https://drive.google.com/uc?export=download&id=1b6aiPsC2rgC1b9dSGY4WhGiZDzmlxlIK"
                  className="bg-defaultBlack py-1 px-3 rounded-md animate-bounce text-center shadow-lg"
                >
                  <h3>
                    Download <br /> My Resume
                  </h3>
                </a>

                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com"
                  className="bg-customOrange py-1 px-3 rounded-md text-center shadow-lg"
                >
                  <h3 className="opacity">
                    <strong className="tracking-widest text-[10px]">
                      EMAIL
                    </strong>{" "}
                    <br /> rezzabagus.rb@gmail.com
                  </h3>
                </a>
              </div>
            </div>
          </Parallax>
        </div>
      </header>

      {/* ref={listMenu.ref} */}
      {/* menu */}
      <div className="fixed bottom-4 left-0 w-full">
        <ul className="flex justify-center gap-10">
          <li className="listMenu">
            <div className="cursor-pointer p-5 bg-customOrange rounded-md">
              Home
            </div>
          </li>
          <li className="listMenu">
            <div className="cursor-pointer p-5 bg-customOrange rounded-md">
              Person
            </div>
          </li>
          <li className="listMenu">
            <div className="cursor-pointer p-5 bg-customOrange rounded-md">
              Apps
            </div>
          </li>
          <li className="listMenu">
            <div className="cursor-pointer p-5 bg-customOrange rounded-md">
              Checklist
            </div>
          </li>
          <li className="listMenu">
            <div className="cursor-pointer p-5 bg-customOrange rounded-md">
              Wort
            </div>
          </li>
        </ul>
      </div>

      <div className="bgSection h-screen"></div>
    </div>
  );
};

export default Home;
