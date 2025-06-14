import React from "react";
import front from "../assets/front.jpg";
import { motion } from "motion/react";

const Front = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0.3}} animate={{ opacity: 1}} exit={{ opacity: 0 }} transition={{ duration: 1 }} 
        className="relative w-full max-h-[90vh] h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${front})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-top justify-left px-18 py-40 text-white">
          <motion.h1 initial={{x:-100}} animate={{x:0}} transition={{duration:2.5}} className="text-white text-7xl text-left font-bold">
            Discover Your Next <br /> Adventure
          </motion.h1>
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1 , y:0}} transition={{duration:1.5}} className="text-xl mt-4">
            Choose from our curated experiences, customized for every <br /> kind of
            traveler.
          </motion.div>
          <motion.button whileTap={{scale:0.7}} className="mt-10 mx-10 px-4 py-3 bg-yellow-500 text-black text-xl font-bold rounded-full hover:bg-yellow-600 transition duration-300 w-80 border-1 border-black">
            Book Now
          </motion.button>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}} className="absolute bottom-0 left-0 text-center text-lg text-white bg-black/30 py-3 px-5">
            <span className="cursor-pointer hover:underline">Easy Booking</span> <span className="text-3xl mx-1 cursor-pointer"> | </span> <span className="cursor-pointer hover:underline">Curated Destinations</span> <span className="text-3xl mx-1 cursor-pointer"> | </span> <span className="cursor-pointer hover:underline">Trusted Support</span>
          </motion.div> 
        </div>
      </motion.div>
    </>
  );
};

export default Front;
