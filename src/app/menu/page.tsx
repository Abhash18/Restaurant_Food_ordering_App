import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const menuPage = () => {
  return (
    <div className='p-6 lg:px-10 xl:px-20 h-[calc(100vh-7rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {
        menu.map(category => (
          <Link href={`/menu/${category.slug}`} key={category.id}           
          className='w-full h-1/3 bg-cover p-8 md:h-1/2'
          style={{backgroundImage:`url(${category.img})`}}>
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
              <p className='text-sm my-4'>{category.desc}</p>
              <button className={`hidden 2xl:block bg-yellow-500 text-white  py-2 px-4 rounded-md`}>Exlpore</button>
            </div>
          </Link>
            ))
      }
    </div>
        )
}

      export default menuPage
