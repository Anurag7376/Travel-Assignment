import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PackageCard from "./PackageCard";

const Packages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/package")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="relative w-full  px-25 py-8 pt-12 ">
      <div>
        <h1 className="text-[rgba(119,200,200,255)] text-5xl font-bold text-center">
          Top Selling Tour Packages of India
        </h1>
      </div>
      <div className="text-center text-md mt-4 mb-4">
        Stay updated with our latest news and happenings through <br /> Informe.
      </div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-8 overflow-y-scroll overflow-x-clip">
        {data.map((item, index) => (
          <PackageCard key={item._id || index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
