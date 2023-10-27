// import React from 'react'
import Sapi from "../assets/img/sapihead.png";

const Hero = () => {
  return (
    <>
      <img className="md:w-1/3 w-2/5 " src={Sapi} />
      <p className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-md text-bold text-white">
        On Your Second Degree!
      </p>
    </>
  );
};

export default Hero;
