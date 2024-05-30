"use client"
import BlogCard from '@/components/blogs/BlogCard'
import { posts } from '@/components/lib/data'
import React, { useState } from 'react'


const BlogPage = async () => {

  
const Posts = posts

  // console.log(data[0].id)
  return (
    <div className='w-full mt-10' >
      <div className="md:grid grid-cols-2 w-full  ">
        {Posts.map((post) => (
          <div className="w-full md:flex items-center  justify-center w-full" key={post.id}>
            <BlogCard post={post} />
          </div>
        ))
        }
      </div>
      {/* <button onClick={connectToDB}>click me</button> */}

    </div>
  )
}

export default BlogPage


// const selectBlog = (id) => {
//   setSingleBlog(blog => {
//     const select = cards.filter((card) => card.id === id)
//     blog = select
//     return blog
//   })
// }
//     {
//         img: 'https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint',
//         title: 'Mother Nature',
//         desc: 'nature is beautiful',
//         id: 1,
//         date: '20/03/23'
//     },
//     {
//         img: 'https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint',
//         title: 'The Diver',
//         desc: 'divers are very skilled',
//         id: 2,
//         date: '02/04/23'
//     },
//     {
//         img: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
//         title: 'The Tortoise',
//         desc: 'have loads of wisdom in em..lol',
//         id: 3,
//         date: '24/09/24'
//     },
//     {
//         img: 'https://images.pexels.com/photos/20937736/pexels-photo-20937736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint',
//         title: 'the beautiful camera',
//         desc: 'takes nice photos',
//         id: 4,
//         date: '05/02/24'
//     },
//     {
//         img: 'https://images.pexels.com/photos/15312443/pexels-photo-15312443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint',
//         title: 'Flower',
//         desc: 'So beautiful and exquisite',
//         id: 5,
//         date:'25/06/22'
//     },
// ]