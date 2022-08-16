import React from "react";
import Barista from "../assets/barista.jpg";
import Cupping from "../assets/cupping.jpg";
import Farm from "../assets/coffeefarm.jpg";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8 text-center">
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="mx-auto mt-[-3rem] bg-white"
            src={Barista}
            alt="Barista serving coffee."
          />
          <h2 className="text-4xl font-bold text-center py-2">We're Hiring!</h2>
          <p className="text-center text-xl font-bold">
            We're currently seeking experienced baristas.{" "}
            <a href="#">Apply today!</a>
          </p>
          <div>
            <button className="bg-[#011627] w-200px rounded-md font-medium my-6 mx-auto px-4 py-3 text-white">
              See Open Positions
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="mx-auto mt-[-3rem] bg-white"
            alt="Coffee Farm"
          />
          <h2 className="text-4xl font-bold text-center py-2">
            Coffee Journal - July 2022
          </h2>
          <p className="text-center text-xl font-bold">
            Read about our recent visit to Colombia{" "}
          </p>
          <div>
            <button className="bg-[#011627] w-200px rounded-md font-medium my-6 mx-auto px-4 py-3 text-white">
              Read More
            </button>
          </div>
        </div>{" "}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="mx-auto mt-[-3rem] bg-white"
            src={Cupping}
            alt="Coffee Cupping"
          />
          <h2 className="text-4xl font-bold text-center py-2">
            Coffee Cuppings
          </h2>
          <p className="text-center text-xl font-bold">
            Our weekly coffee tastings are back!{" "}
          </p>
          <div>
            <button className="bg-[#011627] w-200px rounded-md font-medium my-6 mx-auto px-4 py-3 text-white">
              See Calender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
