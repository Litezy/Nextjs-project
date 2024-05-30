"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ContactPage = () => {
  const [forms,setForms] = useState({
    name:'',
    email:'',
    phone:''
  })
  const handleChange = (e) =>{
    setForms({
      ...forms,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='mt-10 w-11/12 mx-auto '>
      <div className="md:flex items-center justify-between w-11/12 mx-auto ">
        <div className="relative">
          <Image src="/contact.png" alt="" width={500} height={500} />
        </div>
        <div className="md:w-1/2 my-6">
          <form action="" className='w-full'>
            <input type="text" className='h-14 mb-3 rounded-md outline-none w-full bg-slate-800 pl-3 ' placeholder='enter your full name' name='name' value={forms.name}  onChange={handleChange}/>
            <input type="email" className='h-14 mb-3 outline-none rounded-md w-full bg-slate-800 pl-3 ' placeholder='enter your email' name='email' value={forms.email} onChange={handleChange} />
            <input type="text" className='h-14 mb-3 outline-none rounded-md w-full bg-slate-800 pl-3 ' placeholder='enter your phone number' name='phone' value={forms.phone}  onChange={handleChange}/>
            <textarea name="" cols={30}  id="" className='resize-none w-full h-48 bg-slate-800 pl-3 rounded-md' placeholder='enter your message '></textarea>
            <button className='w-full bg-blue-400 h-10 rounded-md'>send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage