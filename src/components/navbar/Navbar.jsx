"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Links from './Links'
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { GiMoebiusTriangle } from "react-icons/gi";

const Navbar = () => {

  const links = [
    {
      title: 'Homepage',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
    {
      title: 'Blog',
      path: '/blog'
    },

  ]
  const pathName = usePathname()
  const [sidenav, setSideNav] = useState(false)
  const sidebarDiv = useRef(null)

  useEffect(() => {
    if (sidebarDiv) {
      window.addEventListener('click', (e) => {
        if (sidebarDiv.current !== null) {
          if (sidebarDiv.current.contains(e.target)) {
            console.log('clicked inside')
          } else {
            setSideNav(false)
          }
        }
      }, true)
    }
  }, [])
  return (
    <div className='flex items-center justify-between relative w-full  px-5 py-4 shadow-xl'>
      <div className="flex items-center gap-3">
        <GiMoebiusTriangle className='text-2xl text-blue-500' />
        <h1 className='text-2xl font-bold'>NextJS</h1>
      </div>

      <div className="text-xs w-2/4">
        <div className="w-fit ml-auto">
          <CiMenuFries onClick={() => setSideNav(true)} className='md:hidden text-white text-4xl font-bold cursor-pointer' />
        </div>
        <div className="hidden md:flex">
          <Links />
        </div>
      </div>
      {sidenav && <div className=" fixed  z-50 top-0 -right-10 w-60 h-screen rounded-e-lg bg-[#0d0c22]" ref={sidebarDiv} >

        <div className="h-full w-11/12 mx-auto items-center justify-center  pt-48">
          {links.map((link) => (
            <div className={`${link.path === pathName && 'bg-white text-[#0d0c22] px-3 font-bold rounded-full'}  w-2/4 mx-auto flex items-center justify-center h-8 mb-3 `} key={link.title}>
              <Link onClick={() => setSideNav(false)} href={link.path} key={link.title}>{link.title}</Link>
            </div>
          ))} 
        </div>
      </div>}
    </div>
  )
}

export default Navbar