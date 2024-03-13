import React from 'react'
import Link from 'next/link'
import { RiShoppingCartFill } from "@remixicon/react";

const CartIcon = () => {
  return (

      <Link href="/cart" >
        <div className=' flex items-center gap-4 md: gap-2  '>
        <RiShoppingCartFill
            size={48} // set custom `width` and `height`
            // color="orange" // set `fill` color
            className="my-icon text-white md:text-red-500" // add custom class name
            
        />
        <span>Cart (3)</span>
        </div>
      </Link>

  )
}

export default CartIcon
