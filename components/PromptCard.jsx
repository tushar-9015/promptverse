"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter  } from 'next/navigation'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

  // console.log({post})
  
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div>
          <Image 
           src={post.creator.image}
           alt='user_image'
           width={40}
           height={40}
           className='rounded-full object-contain'
          />
          {/* <div className='flex flex-col'>
            <h3>{post.creator.username}</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default PromptCard
