"use client"

import { posts } from '@/components/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'


// const getData = async (slug) => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if (!res.ok) {
//     return ;

//   }
//   return res.json()

// }
const SinglePage = ({ params }) => {

  const { slug } = params
  const [singledata, setSingleData] = useState(null)
  useEffect(() => {
    const fetchData = () => {
      const selectedPost = posts.filter((post) => post.id === parseInt(slug))
      setSingleData(selectedPost)
    }
    fetchData()
    console.log(posts, 'params:', slug)
  }, [slug])

  console.log(singledata)
  if (!singledata) {
    return <div className='w-full h-full flex items-center justify-center'>Loading...</div>
  }


  return (
    <div className="w-full h-[32rem] mb-10">
      <div className='w-11/12 mx-auto mt-10 h-full  flex items-center justify-center'>
        <div className="w-full h-[90%] md:flex  items-start gap-10 ">
          <div className="md:w-2/4 w-full md:h-[400%] h-96 relative flex ">
            <Image src={singledata[0].img ? singledata[0].img : '/contact.png'} className='object-contain' fill />
          </div>
          <div className="w-3/4 flex flex-col gap-6">
            <h2 className='text-sky-400 font-bold text-4xl'>{singledata[0].title}</h2>

            <h2 className='font-thin text-md'>{singledata[0].desc}</h2>
            <Link href={`/blog`} className="md:hidden w-fit mr-auto px-5 py-1.3 bg-white rounded-md text-[#0d0c22]">back</Link>
          </div>
        </div>
      </div>
      <Link href={`/blog`} className="hidden md:block w-fit mr-auto px-5 py-1.3 bg-white rounded-md text-[#0d0c22]">back</Link>
    </div>
  )
}

export default SinglePage