import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/app/components/Price'

const singleProdctPage = () => {
  return (
    <div className='p-4 lg:px-10 xl:px-20 h-screen flex flex-col justify-around text-red-500 md:flex-row  md:gap-8 md:items-center'>
      {/* IMAGE CONTAINER */}
      { singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
        <Image src={singleProduct.img} alt='' fill className='object-contain'/>
      </div>
      )
      }
      {/* TEXT CONTRAINER */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'> 
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
      
    </div>
  )
}

export default singleProdctPage