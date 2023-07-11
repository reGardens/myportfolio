import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

export const AnimeBGOrange = () => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: ".dummyOrange",
      translateX: [-30, 0],
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 3000,
    });
  }, []);

  return (
    <div className="dummyOrange absolute w-3/5 h-full bg-customOrange ove">
      &nbsp;
    </div>
  );
};

export const ImageGw = ({ children }) => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: ".imgGw",
      translateX: [-250, 0],
      translateY: [250, 0],
      opacity: [0, 1],
      scale: [0, 1],
      easing: "easeInOutSine",
      duration: 1000,
    });
  }, []);

  return (
    <Parallax speed={-20} translateX={[10, -20]}>
      {children}
    </Parallax>
  );
};

export const ImageGroot = ({ children }) => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: ".imgGroot",
      translateX: [250, 0],
      translateY: [250, 0],
      opacity: [0, 1],
      scale: [0, 1],
      easing: "easeInOutSine",
      duration: 1000,
    });
  }, []);

  return (
    <Parallax speed={-15} translateX={[-10, 20]}>
      {children}
    </Parallax>
  );
};

export const DescDesktop = ({ children }) => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: ".descDesktop",
      translateY: [-250, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 900,
    });
  }, []);

  return (
    <div className="descDesktop absolute top-0 left-0 flex justify-center items-center w-full h-full text-[#ffffff]">
      {children}
    </div>
  );
};

export const ImageGwMobile = ({ children }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = anime({
      targets: ".imgGwMobile",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 1200,
    });
  }, []);

  const iamgw = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, 100],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <div
      className="imgGwMobile w-[10rem] absolute -bottom-[13rem] left-0"
      ref={iamgw.ref}
    >
      <Parallax translateX={[10, -20]}>{children}</Parallax>
    </div>
  );
};

export const ImageGrootMobile = ({ children }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = anime({
      targets: ".imgGrootMobile",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 1200,
    });
  }, []);

  const iamgroot = useParallax({
    translateX: [0, 100],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <div
      ref={iamgroot.ref}
      className="imgGrootMobile w-[10rem] absolute -bottom-[13rem] left-0"
    >
      <Parallax translateX={[10, -20]}>{children}</Parallax>
    </div>
  );
};
