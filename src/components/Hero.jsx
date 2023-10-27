// import React from 'react'
import Dit from "../assets/img/didit.png";

const Hero = () => {
  return (
    <>
      <img className="md:w-1/3 w-4/5 blur-lg" src={Dit} />
      <p className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-md text-bold text-white">
        On Your Second Degree!
      </p>
    </>
  );
};

export default Hero;
