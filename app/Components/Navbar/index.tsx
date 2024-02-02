
import Image from 'next/image'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className=' container bg-[#1B3764] p-4  '>
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
<div>
   <Link href="">Home</Link>
   <Link href="">Pages</Link>
   <Link href="">About</Link>
   <Link href="">Services</Link>
   <Link href="">Contact</Link>
   <Link href=""></Link>
   <Link href=""></Link>
    
</div>

    </header>
  )
}

export default Navbar