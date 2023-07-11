import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
// import { AnimeBGOrange } from "../../Components/Parallax/AnimeBGOrange";

// images
import gw from "../../../assets/images/gw.webp";
import groot from "../../../assets/images/groot.webp";
import grootMobile from "../../../assets/images/grootMobile.webp";
import {
  DescDesktop,
  AnimeBGOrange,
  ImageGroot,
  ImageGw,
  ImageGwMobile,
  ImageGrootMobile,
} from "../../Components/AnimationParallax";

// icons
import { AiOutlineHome } from "react-icons/ai";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-futura">
      {/* seo */}
      <h1 className="text-center absolute mx-auto opacity-0">
        Portfolio Reza Bagus Pratamaa
      </h1>

      {/* banner dekstop */}
      {/* max-h-[35rem] */}
      <header className="bg-defaultBlack hidden md:flex justify-between gap-60 mx-auto max-h-[35rem] relative !overflow-hidden">
        <AnimeBGOrange />

        {/* image me */}
        <ImageGw>
          <div className="bg-customOrange relative overflow-hidden">
            <img src={gw} alt="" className="imgGw w-[30rem]" />
          </div>
        </ImageGw>

        {/* image groot */}
        <ImageGroot>
          <div className="overflow-hidden">
            <img src={groot} alt="" className="imgGroot w-[30rem]" />
          </div>
        </ImageGroot>

        {/* description */}
        <DescDesktop>
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
        </DescDesktop>
      </header>

      {/* banner mobile */}
      {/* max-h-[35rem] */}
      <header className="block md:hidden bg-customOrange h-[28rem] relative overflow-hidden">
        {/* image me mobile */}
        <ImageGwMobile>
          <img src={gw} alt="" />
        </ImageGwMobile>

        <ImageGrootMobile>
          <img src={grootMobile} alt="" />
        </ImageGrootMobile>

        {/* description mobile */}
        <div className="flex justify-center items-start w-full h-full text-[#ffffff]">
          <Parallax translateY={[90, -20]}>
            <div className="flex flex-col gap-3 text-center">
              <p className="text-xl font-bold">Hi, I'm Reza Bagus Pratama</p>

              <div className="">
                <p className="text-3xl bg-defaultBlack shadow-lg font-bold p-2 text-customOrange">
                  Front-End Web Developer
                </p>
              </div>

              <p className="">
                As a web developer, I am also a competitive programmer and tech
                enthusiast.
              </p>

              <Parallax translateY={[60, -40]}>
                <div className="flex w-[13rem] mx-auto flex-col-reverse justify-start items-center gap-3">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1b6aiPsC2rgC1b9dSGY4WhGiZDzmlxlIK"
                    className="bg-defaultBlack py-2 px-3 w-full rounded-md animate-bounce text-center shadow-lg"
                  >
                    <h3 className="">Download My Resume</h3>
                  </a>

                  <a
                    href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com"
                    className="bg-defaultBlack w-full h-fit py-1 px-3 rounded-md text-left shadow-lg"
                  >
                    <h3 className="opacity">
                      <strong className="tracking-[4px] opacity-75 text-[10px]">
                        EMAIL
                      </strong>{" "}
                      <br /> rezzabagus.rb@gmail.com
                    </h3>
                  </a>
                </div>
              </Parallax>
            </div>
          </Parallax>
        </div>
      </header>

      {/* floating menu */}
      <div className="fixed bottom-4 left-0 w-full">
        <ul className="flex justify-center gap-1.5 md:gap-16">
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange rounded-md">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Home</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange rounded-md">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Person</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange rounded-md">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Apps</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange rounded-md">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Checklist</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange rounded-md">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Eperiance</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="bgSection h-screen"></div>
    </div>
  );
};

export default Home;
