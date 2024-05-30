"use client"
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {


  const [cols, setCols] = useState(false)
  return (
    <div className='h-fit py-5 w-full bg-[inherit] px-5  '>
      <hr className="mb-2 bg-[#54748c]" />
      <div className="md:w-[30%] w-[70%]  ml-auto   mb-10 ">
        <h3 className="w-fit ml-auto text-sm text-blue-500 italic">subscribe to our email list</h3>
        <div className="w-full h-full flex item-center bg-green-500 rounded-md">
          <input type="text" className="w-[70%] text-xs text-black h-10 pl-2 rounded-s-md outline-none" placeholder="enter your email" />
          <button className="w-[30%] text-center text-sm">submit</button>
        </div>
      </div>
      <div className="w-full    ">
        <div className=" w-full  md:h-60 md:flex grid  grid-cols-2 gap-4 items-start justify-between  ">
          <div className="flex items-left gap-2 flex-col mb-10 md:mt-0">
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-sm" />
              <p className="text-white text-sm">nextj@gmail.app</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <p className="text-white text-sm font-thin">+1 238 4749594</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <p className="text-white text-sm font-thin">+1 238 4749594</p>
            </div>
            <div className="flex w-2/4 md:w-3/4 lg:w-full justify-between items-left md:gap-2 text-white ">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <div className="flex items-left flex-col text-sm gap-2   mb-10 md:mt-0">
            <p className={`font-bold cursor-pointer`}>Collections</p>
            <p className="font-thin">Classic Skincare</p>
            <p className="font-thin">Nature for you</p>
            <p className="font-thin">Extravagant Care</p>
            <p className="font-thin">All in one box</p>
          </div>
          <div className="flex md:items-left flex-col text-sm gap-2  items-left mb-10 md:mt-0">
            <p className="font-bold">Informations</p>
            <Link href={`/about`} className="font-thin cursor-pointer">About Us</Link>
            <Link href={`/contact`} className="font-thin cursor-pointer">Contact Us</Link>
            <Link href={`/`} className="font-thin cursor-pointer">Terms & Conditions</Link>
            <Link href={`/`} className="font-thin cursor-pointer">Privacy Policy</Link>
          </div>
          <div className="flex md:items-left flex-col text-sm gap-2  items-left mb-10 md:mt-0">
            <p className="font-bold">Quick Links</p>
            <p className="font-thin">My Account</p>
            <p className="font-thin">Awards</p>
            <p className="font-thin">Shipping & Returns</p>
            <p className="font-thin">Free Samples</p>
          </div>
        </div>
        <div className="w-full md:h-10 flex md:flex-row flex-col items-left md:items-center mt-4 md:mt-0 justify-between text-sm">
          <div className="">All rights reserved. 
          <span className="md:text-xl font-bold text-blue-500 italic"> NEXTJS</span> 
          <span> 2024</span></div>
          <div className="md:flex items-center gap-3">
            <h1>We accept payments from the following gateways...</h1>
            <Image src={'/payment.png'} width={200} height={200} />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Footer