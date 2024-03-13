"use client"
import React, { useState } from 'react'
import { RiMenuLine } from "@remixicon/react";
import { RiCloseLargeFill } from "@remixicon/react";
import Link from 'next/link';
import CartIcon from './Carticon';

const Menu = () => {
  const [open, setOpen] = useState(false)
  const user = false
  return (
    <div>
       { !open ? (<RiMenuLine
            size={36} // set custom `width` and `height`
            color="#ef4444" // set `fill` color
            className="my-icon" // add custom class name
            onClick={()=>{setOpen(true)}}
        />) : (
          <RiCloseLargeFill
            size={36} // set custom `width` and `height`
            color="#ef4444" // set `fill` color
            className="my-icon"
            onClick={()=>{setOpen(false)}} // add custom class name
        />
        )
        }
        { open && 
        (<div className='bg-red-500 text-white absolute left-0 top-28 h-[calc(100vh-7rem)] w-full
        flex flex-col justify-center items-center text-3xl gap-8 z-10 uppercase'>
          <Link href="/"  onClick={()=>{setOpen(false)}}>Homepage</Link>
          <Link href="/menu"  onClick={()=>{setOpen(false)}}>Menu</Link>
          <Link href="/"  onClick={()=>{setOpen(false)}}>Working Hours</Link>
          <Link href="/"  onClick={()=>{setOpen(false)}}>Contact</Link>
          {!user ? (
            <Link href="/login"  onClick={()=>{setOpen(false)}}>Login</Link>
            ) : (
              <Link href="/orders"  onClick={()=>{setOpen(false)}}>Orders</Link>
              )}
          <Link href="/cart"  onClick={()=>{setOpen(false)}}><CartIcon /></Link>
        </div>
          )
          
        }
    </div>
  )
}

export default Menu
