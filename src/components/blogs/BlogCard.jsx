"use client"
import SinglePage from '@/app/blog/[slug]/page'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const BlogCard = ({ post }) => {

    return (
        <div className='md:w-1/2 h-fit py-2 mb-4'>
                    <div className="flex items-center  w-full" >
                        <Image src={post.img} width={300} height={600} />
                        <span className='date text-xs'>12/04/23</span>
                    </div>
                    <div className="flex items-left gap-2 mt-2 flex-col ">
                        <h2 className='text-blue-400 font-bold text-xl'>{post.title}</h2>
                        <h5 className='text-sm '>{post.desc}</h5>
                        <Link href={`/blog/${post.id}`} className='underline cursor-pointer' >Read More</Link>
                    </div>
        </div>
    )
}

export default BlogCard