// import React from 'react'
import Dit from "../assets/img/didit.png";

const Hero = () => {
  return (
    <>
      <img className="md:w-1/4 w-4/5" src={Dit} />
      <span className="mb-4 md:text-xl text-lg inline-flex items-center rounded-md bg-purple-50 bg-opacity-75 px-2 py-1 font-bold text-purple-700 ring-1 ring-inset ring-purple-700/10">
        drh. Aditya Widyapramita, M.Vet
      </span>
      <h2 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-md text-bold text-white">
        On Your Master Degree!
      </h2>
    </>
  );
};

export default Hero;
