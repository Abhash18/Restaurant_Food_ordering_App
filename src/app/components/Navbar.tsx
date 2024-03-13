import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../reslogo.jpg'
import CartIcon from './Carticon'
import { RiPhoneFill } from "@remixicon/react";

const Navbar = () => {
  const user = false;
  return (
    <div className='h-16 px-6 border-b-2 border-b-red-500 text-red-500 uppercase text-xl
    flex justify-between items-center
    md:h-24 lg:px-10 xl:px-20'> 

    {/* Left Links */}
      <div className='hidden md:flex gap-4'>
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

          {/* Logo */}

      <div className='h-full py-2'>
        <Link href="/"> 
        <Image  src={Logo} alt="" width={70} height={70} className='   ' />
        </Link>
      </div>

          {/* Mobile Menu */}

      <div className='md:hidden'>
        <Menu />
      </div>

          {/* Right Links */}

      <div className='hidden md:flex items-center gap-4 justify-end'>
            {/* Call Link */}
        <div className='md:absolute top-0.5 right-2 lg:static flex items-center gap-2 bg-orange-500 px-2 rounded-xl cursor-pointer'>
        <RiPhoneFill
            size={42} // set custom `width` and `height`
            color="white" // set `fill` color
            className="my-icon" // add custom class name
        />
        <span className='text-white'>123 456 789</span>
        </div>
        {!user ? (
        <Link href="/login">Login</Link>)
      :
      (    
      <Link href="/orders">Orders</Link>)
      }
      <Link href="/menu"><CartIcon /></Link>
      </div>
    </div>
  )
}

export default Navbar
