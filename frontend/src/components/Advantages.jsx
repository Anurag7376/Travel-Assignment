import React from "react";
import clock from "../assets/clock.png";
import network from "../assets/network.png";
import wallet from "../assets/wallet.png";
import book from "../assets/book.png";
import { motion } from "motion/react";

const Advantages = () => {
  return (
    <div className="relative w-full max-h-[70vh] h-[70vh] bg-[rgba(119,200,200,255)] text-white px-20">
      <div className="font-bold text-5xl text-center pt-8 pb-4">
        Our Advantages
      </div>
      <div className="text-center">
        You can rely on our experience and the quality of services we provide.
      </div>
      <div className="text-center">
        Here are other reasons to book tours at Treat Holidays
      </div>
      <div className="flex flex-row justify-around items-start mt-3">
        <div className="mt-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src={clock}
              alt="Save Time"
            />
          </div>
          <div className="text-xl font-semibold mt-3">Save Time</div>
          <div className="text-md mt-1">
            No more switching for <br /> packages or plans.
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src={wallet}
              alt="Save Money"
            />
          </div>
          <div className="text-xl font-semibold mt-3">Save Money</div>
          <div className="text-md mt-1">
            Compare, negotiate, <br /> and choose the best.
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src={network}
              alt="Trusted Network"
            />
          </div>
          <div className="text-xl font-semibold mt-3">Trusted Network</div>
          <div className="text-md mt-1">
            A Trusted Network of <br /> 7000+ Travel Agents
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src={book}
              alt="Multiple Options"
            />
          </div>
          <div className="text-xl font-semibold mt-3">Multiple Options</div>
          <div className="text-md mt-1">
            Itineraries & Travel Tips <br /> from Trusted Agents
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
