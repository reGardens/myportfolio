import anime from "animejs";
import React, { useEffect, useRef, useState } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
// import { AnimeBGOrange } from "../../Components/Parallax/AnimeBGOrange";

// images
// import google from "../../../assets/icons/Google.png";
import gw from "../../../assets/images/gw.webp";
import groot from "../../../assets/images/groot.webp";
import grootMobile from "../../../assets/images/grootMobile.webp";
import html from "../../../assets/icons/html.png";
import css from "../../../assets/icons/css3.png";
import js from "../../../assets/icons/js.png";
import php from "../../../assets/icons/php.png";
import bootstrap from "../../../assets/icons/bootstrap.png";
import tailwindcss from "../../../assets/icons/tailwindcss.png";
import sass from "../../../assets/icons/sass.png";
import vuejs from "../../../assets/icons/vuejs.png";
import reactjs from "../../../assets/icons/reactjs.png";
import mysql from "../../../assets/icons/mysql.png";
import codeigniter from "../../../assets/icons/codeigniter.png";
import laravel from "../../../assets/icons/laravel.png";
import git from "../../../assets/icons/git.png";

// data
import project from '../../../components/data/project.json';

// icons
import { AiOutlineHome } from "react-icons/ai";

// pages
import { RibbonOrange, RibbonOrangeReverse, } from "../../Components/ribbonOrange";
import { DescDesktop, AnimeBGOrange, ImageGroot, ImageGw, ImageGwMobile, ImageGrootMobile, } from "../../Components/AnimationParallax";
import { MediaComponentDekstop, MediaComponentTablet, MediaComponentMobile, } from "../../Components/MediaComponent";

const Home = () => {
  const datasSkill = [
    { img: null },
    { img: html },
    { img: css },
    { img: js },
    { img: php },
    { img: bootstrap },
    { img: tailwindcss },
    { img: sass },
    { img: vuejs },
    { img: reactjs },
    { img: mysql },
    { img: codeigniter },
    { img: laravel },
    { img: git },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto font-futura">
      {/* seo */}
      <h1 className="text-center absolute mx-auto opacity-0">
        Portfolio Reza Bagus Pratama
      </h1>

      {/* Banner Dekstop */}
      <header id="inDekstop" className="bg-defaultBlack hidden md:flex justify-between gap-60 mx-auto max-h-[35rem] relative !overflow-hidden">
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
                <p className="text-4xl bg-defaultBlack shadow-lg font-bold p-2 text-customOrange">
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
                  className="bg-defaultBlack py-1 px-3 animate-bounce text-center shadow-lg"
                >
                  <h3>
                    Download <br /> My Resume
                  </h3>
                </a>

                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com"
                  className="bg-customOrange py-1 px-3 text-center shadow-lg"
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

      {/* Banner Mobile */}
      <header id="inMobile" className="block bg-customOrange md:hidden min-h-[37rem] h-full relative overflow-hidden">
        {/* image me mobile */}
        <ImageGwMobile>
          <img src={gw} alt="" />
        </ImageGwMobile>

        <ImageGrootMobile>
          <img src={grootMobile} alt="" />
        </ImageGrootMobile>

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

              <Parallax translateY={[150, -30]}>
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

      {/* Floating Menu */}
      <div className="fixed bottom-2 left-0 w-full z-50">
        <ul className="flex justify-center gap-1.5 md:gap-16">
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Home</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Person</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Apps</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Checklist</span>
            </div>
          </li>
          <li className="listMenu w-[3.8rem] md:w-[8rem]">
            <div className="cursor-pointer py-1 md:p-3 flex flex-col items-center justify-center h-full bg-customOrange">
              <AiOutlineHome className="w-[20px] md:w-[30px] md:h-[30px]" />
              <span className="text-[12px] md:text-base">Eperiance</span>
            </div>
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="bg-defaultBlack h-full lg:py-28 pb-14 pt-28 text-defaultBlack">
        {/* ribbon */}
        <RibbonOrange />

        <div className="bg-customOrange text-justify mb-4 lg:w-3/5 mx-4 lg:mx-auto">
          <p className="py-10 px-4 lg:px-32 font-bold">
            My name is Reza Bagus Pratama 25 years old from Indonesia, Central
            Java, I am an IT frontend web developer with 2 years experience as a
            freelance developer, I want to bring my work experience towards a
            fullstack web developer, have made several projects such as asset
            management system applications and POS point of sales and other
            small-scale applications.
          </p>
        </div>

        {/* ribbon reverse */}
        <RibbonOrangeReverse />
      </div>

      {/* Skills */}
      <div className="bg-defaultBlack py-14 lg:pb-28 px-4 lg:px-28">
        <div className="text-white relative z-10 py-4 mb-12">
          <p className="text-center font-bold text-title">Skills</p>
        </div>

        <div className="flex relative">
          {/* animation background gradient custom in app.css */}
          <div className="absolute transition-all ease-in-out flex justify-center items-center w-full h-full top-0 left-0">
            <div className="gradient bg-customOrange">&nbsp;</div>
          </div>

          <div className="mx-auto md:w-2/3 flex flex-wrap justify-center items-center gap-5 z-10">
            {datasSkill.map((data, index) => {
              return (
                <div key={index} className="">
                  {data.img === null ? (
                    <p className="mb-2 font-bold text-xs md:text-base text-white">
                      Googling
                    </p>
                  ) : (
                    <img src={data.img} alt="" className="" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="bg-defaultBlack text-white py-14 lg:pb-28 pt-18 lg:pt-36 px-4 lg:px-28">
        <div className="py-4 mb-6 lg:mb-12">
          <p className="text-center font-bold text-title">Projects</p>
        </div>

        <div className="grid gap-28">
          {project.map((pro, index) => {
            return (
              <div key={index}>
                <div className="mb-10 grid gap-2">
                  <p className="text-2xl font-bold md:text-title leading-loose text-customOrange">
                    {pro.name}
                  </p>
                  <p className="text-sm text-justify md:text-left md:text-base">
                    {pro.description}
                  </p>

                  {/* hashtag */}
                  <div className="flex gap-2 text-defaultBlack mt-2 opacity-70">
                    {pro.hashtags?.map((resu, i) => {
                      return (
                        <a
                          key={i}
                          href={resu.link}
                          className="bg-white hover:bg-customOrange transition-colors px-3 py-1.5 rounded-xl leading-none font-semibold"
                        >
                          {resu.name}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-end justify-center gap-10 w-full">
                  <div className="md:basis-[450px] flex justify-center w-full">
                    <MediaComponentDekstop type="video" url={pro.dekstopView} />
                  </div>

                  <div className="md:basis-[260px] flex justify-center w-full">
                    <MediaComponentTablet type="video" url={pro.tabletView} />
                  </div>

                  <div className="md:basis-[120px] flex justify-center w-full">
                    <MediaComponentMobile type="video" url={pro.mobileView} />
                  </div>
                </div>

                <div className="flex justify-center mt-12">
                  <a
                    href={pro.url}
                    target="_blank"
                    className="border-[1px] border-customOrange hover:border-transparent hover:text-customOrange transition-colors"
                  >
                    <p className="py-3 px-6 md:px-7 text-xs md:text-base leading-none hover:font-semibold pointer-events-none	">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
