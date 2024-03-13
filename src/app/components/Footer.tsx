import React from 'react'
import Link from 'next/link'
import Logo from '../reslogo.jpg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-14 px-6 flex justify-between items-center text-red-500 md:h-[70px]'>
      <Link href="/" className='h-full  flex items-center '> 
        <Image  src={Logo} alt="" width={64} height={64} className=' md:h-5/6 md:w-5/6 md:px-8 md:object-contain' />
        </Link>
        <p className='md:text-lg lg:text-xl'>© All Rights Reserved</p>
    </div>
  )
}

export default Footer
