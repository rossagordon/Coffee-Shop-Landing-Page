import React from "react";
import Steaming from "../assets/steamingmilk.jpg";

const About = () => {
  return (
    <div className="w-full bg-[#FDFFFC] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5">
        <img
          src={Steaming}
          alt="Barista steaming milk."
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold md:text-4xl sm:text-3xl 2xl py-2">
            Established 2021
          </h1>
          <p className="font-bold mx-auto my-4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            reiciendis, saepe aut voluptates exercitationem officiis omnis
            suscipit doloremque placeat voluptate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
