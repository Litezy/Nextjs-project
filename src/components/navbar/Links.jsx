"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = () => {
    const links = [
        {
            title:'Homepage',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Contact',
            path:'/contact'
        },
        {
            title:'Blog',
            path:'/blog'
        },
      
    ]

    const pathName = usePathname()
  return (
    <div className='flex  items-center  w-2/3 ml-auto justify-center gap-6 '>
        {links.map((link) =>(
            <div className={`${link.path === pathName && 'bg-white text-black px-3 py-1.5 rounded-full'} text-md`} key={link.title}>
               <Link href={link.path} key={link.title}>{link.title}</Link>
            </div>
        ))}
    </div>
  )
}

export default Links