import React from "react";
import MyCard from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { use } from "react";

const Explore = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3000/location")
      .then(response => {
        setData(response.data);       
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }, [])

  // max-h-[120vh] h-[120vh]

  return (
    <div className="relative w-full  px-25 py-8 pt-12 ">
      <div>
        <h1 className="text-[rgba(119,200,200,255)] text-5xl font-bold text-center">Explore Most Popular Destinations</h1>
      </div>
      <div className="text-center text-md mt-4 mb-4">
        Plan your perfect trip with our most loved and best-selling <br />
        tour packages.
      </div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-8 overflow-y-scroll overflow-x-clip">
        {data.map((item, index) => (
          <MyCard key={item._id || index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
