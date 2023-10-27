// import React from 'react'
import Sapi from "../assets/img/sapihead.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <img className="md:w-1/3 w-2/5 " src={Sapi} />
      </div>
      <div className="flex justify-center">
        <p className="text-3xl text-bold text-white">On Your New Degree!</p>
      </div>
    </>
  );
};

export default Hero;
