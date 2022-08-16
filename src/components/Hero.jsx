import React from "react";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md: text-5xl sm:text-4l text-3xl font-bold p-2">
          Good Coffee.
        </p>
        <h1 className="md: text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4">
          That's It.
        </h1>
        <p className="md:text-2xl text-xl font-bold pl-2">
          Established 2021.
        </p>
        <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Order Online
        </button>
      </div>
    </div>
  );
};

export default Hero;
