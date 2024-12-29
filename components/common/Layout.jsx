"use client";


import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Layout({children,customClass}) {
  const router = useRouter()

  // extract route from url 
  const pathname = router.pathname; // Get the current route path

   const Link = [
    { title: "create a file explorer", href: "/file-ex" },
    { title: "create nested comments with replies", href: "/comment" },
   ]

  return (
    <div className=' w-full h-screen overflow-hidden bg-neutral-800/10'>
    {/* header */}
    <div className='w-full h-[60px] bg-rose-900  px-[20px] flex justify-between items-center' >
      <div onClick={()=>router.push('/')} className=' cursor-pointer text-2xl text-white font-extrabold'>Home</div>
      <div className=' flex justify-center items-center gap-x-[10px]'>
       
      </div>
    </div>
    <div className={`${customClass} w-full h-full overflow-y-scroll`} >
    {children}
    </div>
    
    </div>
  )
}

export default Layout