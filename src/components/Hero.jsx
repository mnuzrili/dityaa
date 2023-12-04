// import React from 'react'
import Dit from "../assets/img/didit.png";
import { animated, useSpring } from "@react-spring/web";

const Hero = () => {
  const propsInDrop = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3500,
    config: {
      duration: 1500, // duration for the whole animation form start to end
    },
  });
  return (
    <>
      <img className="md:w-1/4 w-4/5 img-hero" src={Dit} />
      <span className="font-custom mb-4 md:text-sm text-ss inline-flex items-center rounded-full bg-purple-50 bg-opacity-75 px-2 py-1 font-bold text-purple-700 ring-2 ring-inset ring-purple-700/10 relative ">
        drh. ADITYA WIDYAPRAMITA, M.Sc
        <animated.div style={propsInDrop}>
          <div className="sm:text-ss text-sss absolute inline-flex items-center justify-center w-12 h-7 font-bold text-white bg-red-500 bg-opacity-70 border-2 rounded-xl -top-5 -right-2 border-gray-700 animate-bounce">
            New
          </div>
        </animated.div>
      </span>
      <h2 className="sm:text-md md:text-lg lg:text-xl xl:text-2xl text-sm text-bold text-white font-custom mb-2">
        On Your Master&apos;s Degree!
      </h2>
    </>
  );
};

export default Hero;
