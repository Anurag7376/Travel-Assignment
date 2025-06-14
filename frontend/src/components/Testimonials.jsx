import React from 'react'
import TestimonialCard from './TestimonialCard';
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
   const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/testimonial")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  return (
    <>
    <hr />
    <div className='text-left text-3xl font-bold mt-10 px-20'>Testimonials</div>
    <div className='relative w-full max-h-[50vh] h-[50vh] flex flex-row overflow-x-scroll scrollbar-hide gap-10 mt-5 ps-30 pe-20 py-5'>
      {data.map((testimonial, index) => (
        <TestimonialCard key={testimonial._id || index} data={testimonial} />
      ))}
    </div>
    </>
  )
}

export default Testimonials