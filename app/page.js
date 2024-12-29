"use client";
import Layout from '@/components/common/Layout';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function HomePage() {
  const router = useRouter();
   const  links = [
      { title: "create a file explorer", href: "/file-ex" },
      { title: "create nested comments with replies", href: "/comment" },
    ]
  return (
    <Layout>
    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
      <div className="bg-neutral-800/90 w-[70%] h-[70%] px-[50px] pt-[30px] shadow-[#797dab] shadow-inner rounded-2xl flex flex-col items-center">
        <h1 className="font-extrabold text-3xl text-green-500">
          Machine code projects
        </h1>
        <div className="mt-[10px] w-full h-full">
          <div className=' flex flex-col items-center'>
            {links.map((link) => (
              <button onClick={()=>{
                console.log('clicked', link.href)
                router.push(link.href)
              }} key={link.href} className="my-[10px]">
                  <p className="text-white  hover:cursor-pointer underline underline-offset-4  duration-300 w-full list-item list-disc font-semibold text-lg hover:text-green-500">
                    {link.title}
                  </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default HomePage