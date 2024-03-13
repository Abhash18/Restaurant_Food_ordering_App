"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const data = [
  {
    id: 1,
    title: "always fresh & always crispy",
    image: "/slide1.jpg"
  },
  {
    id: 2,
    title: "Craving Satisfaction, One Slice at a Time.",
    image: "/slideimg2.jpg"
  },
  {
    id: 1,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg"
  }
];

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setcurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return ( ) => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-7rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>

      {/* Text */}

      <div className='h-1/2 flex flex-col items-center justify-center gap-8 py-10  text-red-500 font-bold
      lg:h-full lg:w-1/2' >
        <h1 className='text-5xl uppercase text-center p-4 md:text-6xl lg:text-7xl '>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white py-4 px-8'>ORDER NOW</button>
      </div>

      {/* Image */}

      <div className='h-1/2 w-full relative
      lg:h-full lg:w-1/2'>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover'></Image>
      </div>

    </div>
  )
}

export default Slider
