
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SlBasket } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className=' bg-[#1B3764]'>
<div className="flex justify-between container  p-4 ">
<div className='flex gap-4  '>
   <Link href="/"><Image
   width={118}
   height={35}
   src="/Logo.png"
   alt='Logo'
   /></Link>
   <div className="flex gap-4">
   <Link href="https://www.facebook.com/" className='border '>
    <Image src="/Facebook.png"
    alt='Facebook'
    width={29}
    height={10}
    />
   </Link>
   <Link href="https://twitter.com/" className='border'>
    <Image src="/Twitter.png"
    alt='Facebook'
    width={29}
    height={10}
    />
   </Link>
   <Link href="https://www.linkedin.com/" className='border'>
    <Image src="/LinkedIn.png"
    alt='Facebook'
    width={29}
    height={10}
    />
   </Link>
   </div>
  
</div>
<div className='flex items-center gap-4 text-white'>
   <Link href="/">Home</Link>
   <Link href="/pages" className='flex items-center'>Pages <FaAngleDown /></Link>
   <Link href="/about">About</Link>
   <Link href="/services">Services</Link>
   <Link href="/contact">Contact</Link>
   <Link href="/basket"><SlBasket /></Link>
   <Link href="/order"><button className='bg-[#FFCA42] text-center p-2 text-[#1B3764] rounded-lg'>Order Today</button></Link>
    
</div>
</div>

    </header>
  )
}

export default Navbar